import { Routes, Route } from "react-router-dom";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/Sidebar/sidebar";
import HomeDashboard from "./HomeDashboard";
import Users from "./Users";
import Projects from "./Projects";
import { useState } from "react";
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashborad from "../../components/ui/FormDashborad/FormDashborad";

function Dashboard() {
  const [showDraftUser, setShowDraftUSer] = useState(false);
  const [showDraftTable, setShowDraftTable] = useState(false);
  const userData = {
    name: "User",
    button: "Add New User",
  };
  const projectData = {
    name: "Project",
    button: "Add New Project",
  };
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar
          showDraftUser={showDraftUser}
          showDraftTable={showDraftTable}
        />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/users" element={<Users />}>
              <Route index element={<TableDashboard data={userData} />} />
              <Route
                path="add"
                element={<FormDashborad setShowDraft={setShowDraftUSer} />}
              />
            </Route>
            <Route path="/project" element={<Projects />}>
              <Route index element={<TableDashboard data={projectData} />} />
              <Route
                path="add"
                element={<FormDashborad setShowDraft={setShowDraftTable} />}
              />
            </Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
