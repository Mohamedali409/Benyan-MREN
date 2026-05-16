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
  const [showDraft, setShowDraft] = useState(false);
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar showDraft={showDraft} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/users" element={<Users />}>
              <Route index element={<TableDashboard />} />
              <Route
                path="add"
                element={<FormDashborad setShowDraft={setShowDraft} />}
              />
            </Route>
            <Route path="/project" element={<Projects />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
