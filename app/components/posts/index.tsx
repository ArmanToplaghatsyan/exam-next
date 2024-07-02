"use client";
import "./style.scss";
import {
  deletePostByIdData,
  getPostsData,
  selectPost,
  selectPosts,
} from "@/lib/features/posts/postSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useEffect } from "react";

export function Posts() {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  console.log(posts);

  useEffect(() => {
    dispatch(getPostsData());
  }, []);

  return (
    <div>
      {posts?.map((elm) => {
        return (
          <div key={elm.id}>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
              <div className="border-b-2 border-neutral-100 px-6 py-4 dark:border-neutral-500">
                <h3 className="inline-block whitespace-nowrap rounded-[0.27rem] bg-blue-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-blue-700">
                  {elm.title}
                </h3>
              </div>

              <div className="p-6">
                <p>
                  {elm.body}
                </p>
                <Link href={"/posts/" + elm.id}>See More</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
