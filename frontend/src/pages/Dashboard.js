import { useEffect, useState } from "react";
import api from "../api/axios";
import Loader from "../components/Loader";
import DashboardCards from "../components/DashboardCards";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([
      api.get("employees/"),
      api.get("attendance/")
    ]).then(([emp, att]) => {
      setData({
        totalEmployees: emp.data.length,
        totalAttendance: att.data.length
      });
    });
  }, []);

  if (!data) return <Loader />;

  return (
    <div className="container">
      <DashboardCards {...data} />
    </div>
  );
};

export default Dashboard;
