import type { Metadata } from "next";
import { Home } from "./components/home";

export default function IndexPage() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Home Page Exam",
};
