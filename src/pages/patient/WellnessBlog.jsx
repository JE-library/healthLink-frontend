import React, { useEffect, useState } from "react";
import axios from "../../services/api";
import { Link } from "react-router";
import { format } from "date-fns";

const WellnessBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get("/posts");
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="p-6">Loading blog posts...</p>;
  if (posts.length === 0)
    return <p className="p-6 text-gray-500">No blog posts found.</p>;

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Wellness & Health Tips
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => {
          const createdDate = format(new Date(post.createdAt), "PPP");
          const author = post.serviceProvider;

          return (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 flex flex-col"
            >
              {/* Image if available */}
              {post.postImage?.url && (
                <img
                  src={post.postImage.url}
                  alt={post.title}
                  className="w-full h-48 object-contain rounded-md mb-4"
                />
              )}

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">{post.description}</p>

              {/* Author */}
              {post.author && (
                <div className="flex items-center gap-4 mt-auto">
                  <Link to={`/patient/providers/${post.author._id}`}>
                    <img
                      src={post.author.profilePhoto?.url}
                      alt={post.author.fullName}
                      className="w-10 h-10 rounded-full object-cover border-2 border-main-body"
                    />
                  </Link>
                  <div className="text-sm">
                    <Link
                      to={`/patient/providers/${post.author._id}`}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      {post.author.fullName}
                    </Link>
                    <p className="text-gray-500 text-xs capitalize">
                      {post.author.specialization} • {createdDate}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WellnessBlog;
