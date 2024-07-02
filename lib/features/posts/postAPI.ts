import axios from "axios";

export const getPostsAPI = async () => {
  const { data } = await axios.get("https://dummyjson.com/posts");
  return data.posts;
};

export const getSinglePostAPI = async (id: number) => {
  const { data } = await axios.get("https://dummyjson.com/posts/" + id);
  return data.post;
};

export const searchPostAPI = async (today: string) => {
  const { data } = await axios.get(
    "https://dummyjson.com/posts/search?q=" + today
  );
  return data.posts;
};

export const limitPostsAPI = async () => {
  const { data } = await axios.get("https://dummyjson.com/posts?limit=10");
  return data.posts;
};

export const skipPostsAPI = async () => {
    const { data } = await axios.get("https://dummyjson.com/posts?limit=10&skip=10");
    return data;
  };

export const deletePostAPI = async (id: number) => {
  const { data } = await axios.delete("https://dummyjson.com/posts/" + id);
  return data.post;
};
