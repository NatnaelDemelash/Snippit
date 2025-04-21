import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { SVGProps, RefAttributes, ComponentType } from 'react';

interface SidebarLinksProps {
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
}

export default function Sidebar() {
  return (
    <nav className="hidden sm:flex flex-col sticky top-0 p-3">
      <div className="py-3">
        <Image
          src={logo}
          alt="Logo"
          width={80}
          height={80}
          className="rounded-full"
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
      </ul>

      <div>User Info</div>
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
