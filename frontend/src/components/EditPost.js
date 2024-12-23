import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import { PencilIcon } from "@heroicons/react/outline";

const EditPost = () => {
  const { id } = useParams();
  const { posts, updatePost } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const [authorImagePreview, setAuthorImagePreview] = useState(null);
  const [postImagePreview, setPostImagePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const postToEdit = posts.find((post) => post._id === id);
    if (postToEdit) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
      setAuthorName(postToEdit.authorName || "");
      setAuthorImagePreview(postToEdit.authorImage || null);
      setPostImagePreview(postToEdit.image || null);
    }
  }, [id, posts]);

  const handleImageChange = (e, setImage, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updatePost({
      _id: id,
      title,
      content,
      authorName,
      authorImage: authorImagePreview,
      image: postImagePreview,
    });

    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Edit Post</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8"
      >
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter post title"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Post Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter post content"
            rows="6"
          ></textarea>
        </div>

        <div className="mb-6">
          <label
            htmlFor="authorName"
            className="block text-sm font-medium text-gray-700"
          >
            Author Name
          </label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter author's name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="authorImage"
            className="block text-sm font-medium text-gray-700"
          >
            Author Image
          </label>
          <input
            id="authorImage"
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleImageChange(e, setAuthorImage, setAuthorImagePreview)
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          {authorImagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Author Image Preview:</p>
              <img
                src={authorImagePreview}
                alt="Author Preview"
                className="w-20 h-20 rounded-full shadow-md"
              />
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="postImage"
            className="block text-sm font-medium text-gray-700"
          >
            Post Image
          </label>
          <input
            id="postImage"
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleImageChange(e, setPostImage, setPostImagePreview)
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          {postImagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-600">Post Image Preview:</p>
              <img
                src={postImagePreview}
                alt="Post Preview"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-500 focus:ring focus:ring-indigo-400 transition duration-150 ease-in-out"
        >
          <PencilIcon className="h-5 w-5 mr-2" />
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
