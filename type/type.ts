export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface IComment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: string;
}

export interface IUser {
  firstname: string;
  lastname: string;
  id: number;
}