import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext"; // Import BlogContext

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // Image for the post
  const [authorName, setAuthorName] = useState(""); // Author's name
  const [authorImage, setAuthorImage] = useState(null); // Author's image
  const [date, setDate] = useState(""); // Date of the post
  const { addPost } = useContext(BlogContext); // Use context
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAuthorImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAuthorImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      image: image ? URL.createObjectURL(image) : null, // Post image URL
      authorName,
      authorImage: authorImage ? URL.createObjectURL(authorImage) : null, // Author image URL
      date, // Include the date
      _id: Date.now().toString(), // Mock post ID
    };
    addPost(newPost); // Add post using context
    navigate("/"); // Redirect to homepage
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Post Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-lg font-medium text-gray-700"
          >
            Post Content
          </label>
          <textarea
            id="content"
            placeholder="Post Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-lg font-medium text-gray-700"
          >
            Post Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-lg font-medium text-gray-700"
          >
            Post Image
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        {image && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Image Preview:</p>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        <div>
          <label
            htmlFor="authorName"
            className="block text-lg font-medium text-gray-700"
          >
            Author Name
          </label>
          <input
            id="authorName"
            type="text"
            placeholder="Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label
            htmlFor="authorImage"
            className="block text-lg font-medium text-gray-700"
          >
            Author Image
          </label>
          <input
            id="authorImage"
            type="file"
            accept="image/*"
            onChange={handleAuthorImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        {authorImage && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Author Image Preview:</p>
            <img
              src={URL.createObjectURL(authorImage)}
              alt="Author Preview"
              className="w-20 h-20 rounded-full shadow-md"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
