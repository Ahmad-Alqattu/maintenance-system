// src/config/menuConfig.js
export const menuItems = [
  {
    id: "dashboard",
    text: "Dashboard",
    textEn: "Dashboard",
    path: "/dashboard",
    icon: "dashboard",
  },
  {
    id: "settings",
    text: "الإعدادات",
    textEn: "Settings",
    path: "/settings",
    icon: "settings",
  },
  {
    id: "users",
    text: "المستخدمين",
    textEn: "Users",
    path: "/users",
    icon: "users",
    children: [
      { id: "all-users", text: "كل المستخدمين", textEn: "All Users", path: "/users/all" },
      { id: "admins", text: "المشرفين", textEn: "Admins", path: "/users/admins" },
    ],
  },
];