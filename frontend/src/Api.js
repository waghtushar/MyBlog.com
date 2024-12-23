import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend URL

export const getPosts = () => axios.get(`http://localhost:5000/api/posts`);
export const getPostById = (id) => axios.get(`http://localhost:5000/api/posts/${id}`);
export const createPost = (post) => axios.post(`http://localhost:5000/api/posts`, post);
export const updatePost = (id, updatedPost) => axios.put(`http://localhost:5000/api/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`http://localhost:5000/api/posts/${id}`);


