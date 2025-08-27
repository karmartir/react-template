import React from "react";
import { useEffect, useState } from "react";
import { DiVim } from "react-icons/di";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active" : "link");
const activeSublink = ({ isActive }) => (isActive ? "active" : "link");

const SidebarItem = ({ item, isOpen, setIsOpen }) => {
  const [expandMenu, setExpandMenu] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setExpandMenu(false);
    }
  }, [isOpen, setExpandMenu]);

  const hideSidebar = () => {
    setExpandMenu(false);
    setIsOpen(false);
  };

  if (item.children) {
    return <div></div>;
  } else {
    return (
      <NavLink to={item.path} className={activeLink}>
        <div className="sidebar-item s-parent" onClick={hideSidebar}>
          <div className="sidebar-title">
            <span>
              {item.icon && <div className="icon">{item.icon}</div>}
              {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </NavLink>
    );
  }
};

export default SidebarItem;
