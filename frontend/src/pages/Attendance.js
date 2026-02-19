import { useEffect, useState } from "react";
import api from "../api/axios";
import Loader from "../components/Loader";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";

const Attendance = () => {
  const [records, setRecords] = useState(null);

  const fetchAttendance = () => {
    api.get("attendance/").then(res => setRecords(res.data));
  };

  useEffect(fetchAttendance, []);

  if (!records) return <Loader />;

  return (
    <div className="container mt-4">
      <AttendanceForm refresh={fetchAttendance} />
      <AttendanceList records={records} />
    </div>
  );
};

export default Attendance;
