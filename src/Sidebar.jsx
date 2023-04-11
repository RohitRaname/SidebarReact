import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { useAppContext } from "./context";
import logo from "./logo.svg";

const Sidebar = ()=> {
  const { isSidebarOpen, closeSidebar } = useAppContext();
  return (
    <>
      <div className="sidebar" data-active={isSidebarOpen}>
        <header>
          <img src={logo} alt="Coding Addict" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </header>

        <ul className="links">
          {links.map(({ id, icon, text }) => (
            <li key={id} className="link">
              {icon}
              <p>{text}</p>
            </li>
          ))}
        </ul>

        <ul className="social-icons">
          {social.map(({ id, icon }) => (
            <li key={id} className="social-icon">
              {icon}{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;