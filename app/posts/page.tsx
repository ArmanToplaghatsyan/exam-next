import { Metadata } from "next";
import { Posts } from "../components/posts";


export default function PostsPage() {
  return (
    <div>
      <Posts/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Posts Page",
};
