import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';

// interface SidebarLinksProps {
//   text: string;
//   Icon: ReactElement;
// }

export default function Sidebar() {
  return (
    <nav className="hidden sm:flex flex-col">
      <div>Logo</div>

      <ul>
        <SidebarLinks text="Home" Icon={HomeIcon} />
        <SidebarLinks text="Explore" Icon={HashtagIcon} />
        <SidebarLinks text="Notifications" Icon={BellIcon} />
        <SidebarLinks text="Messages" Icon={InboxIcon} />
        <SidebarLinks text="Bokkmarks" Icon={BookmarkIcon} />
        <SidebarLinks text="Users" Icon={UserIcon} />
        <SidebarLinks text="More" Icon={EllipsisHorizontalCircleIcon} />
      </ul>

      <div>User Info</div>
    </nav>
  );
}

function SidebarLinks({ text, Icon }: SidebarLinksProps) {
  return (
    <li className="flex items-center text-xl mb-6 sticky top-0 space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:block">{text}</span>
    </li>
  );
}
