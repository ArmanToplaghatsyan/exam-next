"use client";
import { createCommentData } from "@/lib/features/comment/commentSlice";
import { useAppDispatch } from "@/lib/hooks";
import { IComment, IPost, IUser } from "@/type/type";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./style.scss";

export function SinglePosts({ id }: { id: number }) {
  const [post, setPost] = useState<IPost>({} as IPost);
  console.log(post, id);

  useEffect(() => {
    axios
      .get("http://dummyjson.com/posts/" + id)
      .then((res) => {
        setPost(res.data);
      })
      .catch(console.warn);
  }, [id]);

  const dipatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IComment>();

  const save = (data: IComment) => {
    // dispatch(createCommentData());
    reset();
  };

  return (
    <div className="main">
      <div>
        <h2>{post.title}</h2>
        <span>{post.userId}</span>
        <span>{post.body}</span>
        <span>{post.views} </span>
        <h2>Views</h2>
        <span>{post.reactions?.likes} </span>
        <h2>Likes</h2>
        <span>{post.reactions?.dislikes}</span>
        <h2>Dislikes</h2>

        <h3>For Comments</h3>
        <h4>Enter your minds :)</h4>

        <form onSubmit={handleSubmit(save)}>
          <h4>User</h4>
          <input
            placeholder="user"
            {...register("user", { required: "Enter user" })}
          />
          {errors.user && <p>{errors.user.message}</p>}
          <h4>Post Id</h4>
          <input
            placeholder="postId"
            {...register("postId", { required: "Enter postId" })}
          />
          {errors.postId && <p>{errors.postId.message}</p>}
          <h4>Body</h4>
          <input
            placeholder="body"
            {...register("body", { required: "Enter body" })}
          />
          {errors.body && <p>{errors.body.message}</p>}
          <h4>Save</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            type="submit"
            width={60}
            height={60}
          >
            <path
              d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0
             64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32
              306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 
              17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1
               0 128 64 64 0 1 1 0-128z"
            />
          </svg>
        </form>
      </div>
    </div>
  );
}
