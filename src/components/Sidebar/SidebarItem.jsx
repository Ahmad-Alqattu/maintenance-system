// src/components/SidebarItem.js
import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, isRTL }) => {
  return (
    <div>
      <NavLink
        to={item.path}
        className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
      >
        {item.icon && <i className={`icon-${item.icon}`}></i>}
        {isRTL ? item.text : item.textEn}
      </NavLink>

      {/* Render children if any */}
      {item.children && (
        <div className="sidebar-submenu">
          {item.children.map((child) => (
            <SidebarItem key={child.id} item={child} isRTL={isRTL} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
