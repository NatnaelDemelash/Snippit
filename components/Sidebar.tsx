import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "@/public/assets/logoLight.png";
import { SVGProps, RefAttributes, ComponentType } from "react";

interface SidebarLinksProps {
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
}

export default function Sidebar() {
  return (
    <nav className="h-screen hidden sm:flex flex-col sticky top-0 p-3 ">
      <div className="relative h-full">
        <div className="py-3">
          <Image
            src={logo}
            alt="Logo"
            width={110}
            height={110}
            className="rounded-full fill-yellow"
          />
        </div>

        <ul>
          <SidebarLinks text="Home" Icon={HomeIcon} />
          <SidebarLinks text="Explore" Icon={HashtagIcon} />
          <SidebarLinks text="Notifications" Icon={BellIcon} />
          <SidebarLinks text="Messages" Icon={InboxIcon} />
          <SidebarLinks text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLinks text="Profile" Icon={UserIcon} />
          <SidebarLinks text="More" Icon={EllipsisHorizontalCircleIcon} />
          <button className="hidden xl:block w-[200px] h-[52px] rounded-full bg-slate-950 text-white font-medium cursor-pointer shadow-md mt-2">
            Snippit
          </button>
        </ul>

        <div className="absolute bottom-0">User Info</div>
      </div>
    </nav>
  );
}

function SidebarLinks({ text, Icon }: SidebarLinksProps) {
  return (
    <li className="flex items-center text-xl mb-4 space-x-3 p-2.5">
      <Icon className="h-7" />
      <span className="hidden xl:block">{text}</span>
    </li>
  );
}
