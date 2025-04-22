import PostFeed from "@/components/PostFeed";
import Sidebar from "@/components/Sidebar";
import Widgets from "@/components/Widgets";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-[#0F1419] min-h-screen max-w-[1440px] xl:max-w-[1800px] mx-auto flex">
      <Sidebar />
      <PostFeed />
      <Widgets />
    </div>
  );
}
