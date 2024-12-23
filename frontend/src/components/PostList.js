import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

const PostList = () => {
  const { posts, deletePost } = useContext(BlogContext);
  const [expandedPosts, setExpandedPosts] = useState({}); // State to track expanded posts

  const toggleReadMore = (id) => {
    setExpandedPosts((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the expanded state for the specific post
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        All Blog Posts
      </h2>
      {posts.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-6">
          {posts.map((post) => (
            <li
              key={post._id}
              className="w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={
                    post.image ||
                    "https://source.unsplash.com/600x400/?technology"
                  }
                  alt="card__image"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                    post.category === "Technology"
                      ? "bg-gradient-to-b from-blue-600 to-blue-400 text-white"
                      : post.category === "Food"
                      ? "bg-gradient-to-b from-orange-500 to-orange-400 text-white"
                      : "bg-gradient-to-b from-red-500 to-red-400 text-white"
                  }`}
                >
                  {post.category}
                </span>
                <h4 className="mt-2 text-xl font-semibold capitalize">
                  {post.title}
                </h4>

                <p className="mt-2 text-gray-700 text-sm">
                  {expandedPosts[post._id]
                    ? post.content // Show full content if expanded
                    : `${post.content.slice(0, 100)}...`}{" "}
                  {/* Show truncated content */}
                </p>
                <button
                  onClick={() => toggleReadMore(post._id)}
                  className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-semibold"
                >
                  {expandedPosts[post._id] ? "Read Less" : "Read More"}
                </button>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.authorImage || "https://i.pravatar.cc/40?img=1"}
                    alt="user__image"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold text-sm">
                      {post.authorName || "Jane Doe"}
                    </h5>
                    <small className="text-xs text-gray-500">
                      {post.date || "2h ago"}
                    </small>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => deletePost(post._id)}
                    className="text-red-600 hover:text-red-800 focus:outline-none"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                  <Link
                    to={`/edit/${post._id}`}
                    className="text-blue-600 hover:text-blue-800 focus:outline-none"
                  >
                    <PencilIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">
          No blog posts available. Create your first post!
        </p>
      )}
    </div>
  );
};

export default PostList;
