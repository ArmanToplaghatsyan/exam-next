import { SinglePosts } from "@/app/components/singlePost";
import { Metadata } from "next";

export default function SinglePostPage({params}:any) {
  return (
    <div>
      <SinglePosts id={params.id}/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Single Posts Page",
};
