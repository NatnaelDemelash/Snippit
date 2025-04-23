import Image from 'next/image';
import profile from '@/public/assets/profilePic.png';
import {
  ArrowUpTrayIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export default function Post() {
  return (
    <div>
      <PostHeader />

      <div className="ml-16 p-3 flex space-x-14">
        <div className="relative">
          <ChatBubbleBottomCenterIcon className="w-[25px] h-[25px] cursor-pointer hover:text-[#900C3F] transition" />
          <span className="absolute top-1 -right-3 text-xs">2</span>
        </div>

        <div className="relative">
          <HeartIcon className="w-[25px] h-[25px] cursor-pointer hover:text-[#900C3F] transition" />
          <span className="absolute top-1 -right-3 text-xs">2</span>
        </div>

        <div className="relative">
          <ChartBarIcon className="w-[25px] h-[25px] cursor-not-allowed" />
        </div>

        <div className="relative">
          <ArrowUpTrayIcon className="w-[25px] h-[25px] cursor-not-allowed" />
        </div>
      </div>
    </div>
  );
}

export function PostHeader() {
  return (
    <div className="flex p-3 space-x-5">
      <Image
        src={profile}
        alt="Profile Picture"
        width={44}
        height={44}
        className="w-11 h-11"
      />
      <div className="text-[15px] flex flex-col space-y-1.5">
        <div className="flex space-x-1.5 text-[#707E89]">
          <span className="inline-block font-bold text-[#0f1419] whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
            Guest
          </span>
          <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis max-w-[60px] min-[400px]:max-w-[100px] min-[500px]:max-w-[140px] sm:max-w-[160px]">
            @guest00234
          </span>
          <span>·</span>
          <span>1 day ago</span>
        </div>

        <span>Sample test post!</span>
      </div>
    </div>
  );
}
