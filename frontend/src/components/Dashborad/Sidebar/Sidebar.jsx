import { Link, NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
const Sidebar = ({ showDraftUser, showDraftTable }) => {
  const links = [
    {
      id: 1,
      icon: "bars-progress",
      title: "Status",
      path: "/",
    },
    {
      id: 2,
      icon: "users",
      title: "Users management",
      path: "/users",
    },
    {
      id: 3,
      icon: "diagram-project",
      title: "Projects management",
      path: "/project",
    },
    {
      id: 4,
      icon: "code",
      title: "Developer management",
      path: "/dev-management",
    },
    {
      id: 5,
      icon: "wordpress",
      title: "CMS",
      path: "/cms",
    },
    {
      id: 6,
      icon: "headset",
      title: "Live chat",
      path: "/live-chat",
    },
  ];
  return (
    <aside className={`min-vh-100 py-4 ${style["sidebar"]}`}>
      <div className="fw-semibold mb-4 px-3 fs-4">Dashboard</div>
      <nav>
        {links.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={`${style.navItem} d-flex align-items-center px-3 py-3 gap-2`}
          >
            <i className={`fa-solid fa-${item.icon} fs-4 `}></i>
            <span className={`${style["title"]}`}>{item.title}</span>

            {item.path === "/users" && showDraftUser && (
              <span className="badge bg-danger ms-auto">Draft</span>
            )}
            {item.path === "/project" && showDraftTable && (
              <span className="badge bg-danger ms-auto">Draft</span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
