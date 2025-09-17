import React from "react";

const Navbar = () => {
  const navList = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Project",
      url: "#project",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];
  return (
    <ul className="hidden md:flex gap-8 items-center ">
      {navList.map((item, index) => (
        <li key={index}>
          <a href={item.url}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
