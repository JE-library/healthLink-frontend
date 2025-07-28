import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PublicLayout from "../../layouts/PublicLayout";
import axios from "../../services/api";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts");
        if (res.data.success) {
          setPosts(res.data.posts);
        }
      } catch (err) {
        console.error("Error fetching posts:", err?.response?.data || err);
      }
    };

    fetchPosts();
  }, []);

  const handleAuthorClick = (id) => {
    const token = localStorage.getItem("accessToken");
    navigate(token ? `/providers/${id}` : "/signup/patient");
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-600 font-primary-font">
          Health & Wellness Blog
        </h1>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {posts.map((post) => {
            const {
              _id,
              title,
              description,
              createdAt,
              postImage,
              author,
            } = post;

            const formattedDate = new Date(createdAt).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "short", day: "numeric" }
            );

            return (
              <div
                key={_id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden h-full border border-blue-100"
              >
                {postImage?.url && (
                  <img
                    src={postImage.url}
                    alt="Blog Post"
                    className="w-full h-52 object-contain"
                  />
                )}

                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-primary-body mb-2">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-700 mb-4 flex-grow leading-relaxed">
                    {description.length > 130
                      ? `${description.slice(0, 130)}...`
                      : description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                    <div
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() =>
                        author?._id && handleAuthorClick(author._id)
                      }
                    >
                      <img
                        src={
                          author?.profilePhoto?.url ||
                          "https://via.placeholder.com/40"
                        }
                        alt={author?.fullName || "Author"}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div className="text-sm">
                        <p className="text-blue-500 font-semibold hover:underline">
                          {author?.fullName || "Unknown Author"}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {author?.specialization || "Health Specialist"}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-gray-400">{formattedDate}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PublicLayout>
  );
};

export default Blog;
