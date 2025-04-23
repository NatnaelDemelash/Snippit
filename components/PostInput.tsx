import Image from 'next/image';

import logo from '@/public/assets/logoLight.png';
import {
  CalendarDaysIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

export default function PostInput() {
  return (
    <div className="flex items-center space-x-5 p-4">
      <Image src={logo} height={100} alt="logo" />

      <div className="w-full">
        <textarea
          className="resize-none outline-none w-full min-h-[50px] text-lg text-[#0f1419] border-b border-gray-200 pb-6"
          placeholder="What's happening!?"
        />

        <div className="flex justify-between pt-5">
          <div className="flex space-x-5">
            <PhotoIcon className="text-[#900C3F] w-[22px] h-[22px]" />
            <ChartBarIcon className="text-[#900C3F] w-[22px] h-[22px]" />
            <FaceSmileIcon className="text-[#900C3F] w-[22px] h-[22px]" />
            <CalendarDaysIcon className="text-[#900C3F] w-[22px] h-[22px]" />
            <MapPinIcon className="text-[#900C3F] w-[22px] h-[22px]" />
          </div>

          <button className="bg-[#0F1419] text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer">
            Snippit
          </button>
        </div>
      </div>
    </div>
  );
}
