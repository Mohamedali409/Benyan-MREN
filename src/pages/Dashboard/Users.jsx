import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <section className="py-4">
      <Outlet />
    </section>
  );
};

export default Users;
