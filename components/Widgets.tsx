import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import natnael from "@/public/assets/natnael.png";
import elon from "@/public/assets/elon.png";

export default function Widgets() {
  return (
    <div className="p-3 hidden lg:flex flex-col space-y-4 w-[400px]">
      <div className="flex items-center space-x-3 rounded-full bg-[#EFF3F4] text-[#89959D] h-[44px] pl-5">
        <MagnifyingGlassIcon className="w-[20px] h-[20px]" />
        <input
          type="text"
          placeholder="Search for snipps"
          className="bg-transparent outline-none"
        />
      </div>

      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">What's Happening</h1>

        <div className="flex flex-col text-sm py-3 text-[#536471] text-[13px]">
          <div className="flex justify-between">
            <span>Trending in Ethiopia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-base text-[#0f1419]">#NextJS</span>
          <span className="text-[#536471] text-xs">320K Snipps</span>
        </div>

        <div className="flex flex-col text-sm py-3 text-[#536471] text-[13px]">
          <div className="flex justify-between">
            <span>Trending in Ethiopia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-base text-[#0f1419]">Angular</span>
          <span className="text-[#536471] text-xs">84K Snipps</span>
        </div>

        <div className="flex flex-col text-sm py-3 text-[#536471] text-[13px]">
          <div className="flex justify-between">
            <span>Trending in Ethiopia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-base text-[#0f1419]">
            Donald Trump
          </span>
          <span className="text-[#536471] text-xs">200K Snipps</span>
        </div>

        <div className="flex flex-col text-sm py-3 text-[#536471] text-[13px]">
          <div className="flex justify-between">
            <span>Trending in Ethiopia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>

          <span className="font-bold text-base text-[#0f1419]">JavaScript</span>
          <span className="text-[#536471] text-xs">192K Snipps</span>
        </div>
      </div>

      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="text-xl font-bold mb-2">Who to follow</h1>

        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            <Image
              src={natnael}
              width={56}
              height={56}
              alt="profile"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Natnael Demelash</span>
              <span>@natidemelash</span>
            </div>
          </div>

          <button className="bg-[#0f1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            follow
          </button>
        </div>

        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-3">
            <Image
              src={elon}
              width={56}
              height={56}
              alt="profile"
              className="w-14 h-14 rounded-full"
            />

            <div className="flex flex-col text-sm">
              <span className="font-bold">Elon Musk</span>
              <span>@elonmusk</span>
            </div>
          </div>

          <button className="bg-[#0f1419] text-white w-[72px] h-[40px] rounded-full text-sm">
            follow
          </button>
        </div>
      </div>
    </div>
  );
}
