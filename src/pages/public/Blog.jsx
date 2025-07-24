import PublicLayout from "../../layouts/PublicLayout";

import React, { useEffect, useState } from "react";
import axios from "../../services/api";
import { useNavigate } from "react-router";

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
        console.error("Error fetching posts:", err.response.data);
      }
    };
    fetchPosts();
  }, []);

  const handleAuthorClick = (id) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    
    navigate(token ? `/providers/${id}` : "/signup/patient");
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-white py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary-body font-primary-font">
          Health & Wellness Blog
        </h1>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {posts.map((post) => {
            const { _id, title, description, createdAt, postImage, author } =
              post;

            const formattedDate = new Date(createdAt).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            );

            return (
              <div
                key={_id}
                className="bg-tertiary-body/10 rounded-md shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden h-full min-h-[400px]"
              >
                {postImage?.url && (
                  <div className="w-full h-52 bg-gray-100">
                    <img
                      src={postImage.url}
                      alt="Blog Post"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div
                  className={`p-5 flex flex-col flex-grow font-secondary-font h-full ${
                    !postImage?.url ? "justify-between" : ""
                  }`}
                >
                  <h2 className="text-xl font-bold text-main-font mb-2">
                    {title}
                  </h2>

                  <p className="text-[15px] text-main-font mb-4 leading-relaxed flex-grow">
                    {description.length > 130
                      ? `${description.slice(0, 130)}...`
                      : description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-tertiary-body mt-auto">
                    <div
                      className="flex items-center space-x-3 cursor-pointer"
                      onClick={() => handleAuthorClick(author._id)}
                    >
                      <img
                        src={author.profilePhoto?.url}
                        alt="Author"
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div className="text-sm">
                        <p className="text-primary-body font-semibold hover:underline">
                          {author.fullName}
                        </p>
                        <p className="text-main-font/80">
                          {author.specialization}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-main-font/80">
                      {formattedDate}
                    </span>
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
