import { createAppSlice } from "@/lib/createAppSlice";
import { IComment, IUser } from "../../../type/type";
import {
  getAllUsers,
  getCommentByPostAPI,
  deleteCommentAPI,
  createCommentAPI,
} from "./commentAPI";

const initialState: { comments: IComment[]; comment: IComment , users:IUser[]} = {
  comments: [],
  comment: {} as IComment,
  users: []
};

export const commentSlice = createAppSlice({
  name: "comment slice",
  initialState,
  reducers: (create) => ({
    createCommentData: create.asyncThunk(async () => {
      return await createCommentAPI();
    }),
    deleteCommentData: create.asyncThunk(async (id: number) => {
      return await deleteCommentAPI(id);
    }),
    getCommentByPostData: create.asyncThunk(
      async (id: number) => {
        return await getCommentByPostAPI(id);
      },
      {
        fulfilled: (state, action) => {
          state.comment = action.payload;
        },
      }
    ),

    getAllUsersData: create.asyncThunk(
      async () => {
        return await getAllUsers();
      },
      {
        fulfilled: (state, action) => {
          state.users = action.payload;
        },
      }
    ),
  }),
  selectors: {
    selectComment: (state) => state.comment,
    selectComments: (state) => state.comments,
  },
});

export const { selectComment, selectComments } = commentSlice.selectors;
export const {
  getAllUsersData,
  getCommentByPostData,
  deleteCommentData,
  createCommentData,
} = commentSlice.actions;
