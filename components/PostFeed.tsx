import React from "react";
import PostInput from "./PostInput";
import Post from "./Post";

export default function PostFeed() {
  return (
    <div className="flex flex-grow flex-col border border-slate-200 max-w-2xl xl:max-w-3xl 2xl:max-w-6xl">
      <div className="text-lg sm:text-xl font-bold px-3 py-4 bg-white bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
        Home
      </div>
      <PostInput />
      <Post />
    </div>
  );
}
