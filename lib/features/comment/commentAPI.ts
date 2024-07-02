import axios from "axios";

export const getCommentByPostAPI = async (id: number) => {
  const { data } = await axios.get("https://dummyjson.com/comments/post/" + id);
  return data.comments;
};

export const createCommentAPI = async () => {
  const { data } = await axios.post("https://dummyjson.com/comments/add");
  return data.comment;
};

export const deleteCommentAPI = async (id: number) => {
  const { data } = await axios.delete("https://dummyjson.com/comments/" + id);
  return data.comment;
};

export const getAllUsers = async () => {
  const { data } = await axios.delete("https://dummyjson.com/users");
  return data.user;
};
