import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";

const PostList = () => {
  const { posts, deletePost } = useContext(BlogContext);

  return (
    <div className="max-w-5 xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-5">All Blog Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center">
              <Link
                to={`/post/${post._id}`}
                className="text-indigo-600 hover:underline"
              >
                {post.title}
              </Link>
              <div className="flex space-x-4">
                <button
                  onClick={() => deletePost(post._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
                <Link
                  to={`/edit/${post._id}`}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
