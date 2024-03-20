import {
  HomeIcon,
  CodeOfConductIcon,
  DeviceMobileIcon,
  ProjectSymlinkIcon,
} from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";

const navItems = [
  { path: "/about", text: "About", icon: <CodeOfConductIcon /> },
  { path: "/pricing", text: "Pricing", icon: <ProjectSymlinkIcon /> },
  { path: "/contact", text: "Contact", icon: <DeviceMobileIcon /> },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-around items-center bg-blue-800 bg-opacity-30 px-10 m-2 rounded w-full h-20">
      <Link href="/" className="flex items-center">
        {<HomeIcon />}
        <span className=" mx-1">Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        <ActiveLink 
          key={navItem.path} 
          className=" m-2" 
          {...navItem}
          
        >
          {navItem.icon}
          <span className=" px-1">{navItem.text}</span>
        </ActiveLink>
      ))}
    </nav>
  );
};
