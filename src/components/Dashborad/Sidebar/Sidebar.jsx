import style from "./Sidebar.module.css";
const Sidebar = () => {
  const links = [
    {
      id: 1,
      icon: "bars-progress",
      title: "Status",
    },
    {
      id: 2,
      icon: "users",
      title: "Users management",
    },
    {
      id: 3,
      icon: "diagram-project",
      title: "Projects management",
    },
    {
      id: 4,
      icon: "code",
      title: "Developer management",
    },
    {
      id: 5,
      icon: "wordpress",
      title: "CMS",
    },
    {
      id: 6,
      icon: "headset",
      title: "Live chat",
    },
  ];
  return (
    <aside className={`min-vh-100 py-4 ${style["sidebar"]}`}>
      <div className="fw-semibold mb-4 px-3 fs-4">Dashboard</div>
      <nav>
        {links.map((item) => (
          <div
            key={item.id}
            className={`${style.navItem} d-flex align-items-center px-3 py-3 gap-2`}
          >
            <i className={`fa-solid fa-${item.icon} fs-4 `}></i>
            <span className={`${style["title"]}`}>{item.title}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
