import React, { createContext, useState } from 'react';

// Create a new Context
export const BlogContext = createContext();

// Create a Provider component
export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post._id === updatedPost._id ? updatedPost : post))
    );
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
