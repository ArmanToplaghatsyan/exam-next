import {
  getPostsAPI,
  getSinglePostAPI,
  deletePostAPI,
  searchPostAPI,
  limitPostsAPI,
  skipPostsAPI,
} from "./postAPI";
import { createAppSlice } from "@/lib/createAppSlice";
import { IPost } from "../../../type/type";

const initialState: { posts: IPost[]; post: IPost } = {
  posts: [],
  post: {} as IPost,
};

export const postSlice = createAppSlice({
  name: "post Slice",
  initialState,
  reducers: (create) => ({
    getPostsData: create.asyncThunk(
      async () => {
        return await getPostsAPI();
      },
      {
        fulfilled: (state, action) => {
          state.posts = action.payload;
        },
      }
    ),

    getSinglePostData: create.asyncThunk(
      async (id: number) => {
        return await getSinglePostAPI(id);
      },
      {
        fulfilled: (state, action) => {
          state.post = action.payload;
        },
      }
    ),

    deletePostByIdData: create.asyncThunk(async (id: number) => {
      return await deletePostAPI(id);
    }),

    searchPostsData: create.asyncThunk(
      async (today: string) => {
        return await searchPostAPI(today);
      },
      {
        fulfilled: (state, action) => {
          state.post = action.payload;
        },
      }
    ),

    limitPostsData: create.asyncThunk(
      async () => {
        return await limitPostsAPI();
      },
      {
        fulfilled: (state, action) => {
          state.posts = action.payload;
        },
      }
    ),

    skipPostsData: create.asyncThunk(
      async (id: number) => {
        return await skipPostsAPI();
      },
      {
        fulfilled: (state, action) => {
          state.posts = action.payload;
        },
      }
    ),
  }),
  selectors: {
    selectPost: (state) => state.post,
    selectPosts: (state) => state.posts,
  },
});

export const {
  getPostsData,
  getSinglePostData,
  deletePostByIdData,
  searchPostsData,
  limitPostsData,
  skipPostsData,
} = postSlice.actions;

export const { selectPost, selectPosts } = postSlice.selectors;
