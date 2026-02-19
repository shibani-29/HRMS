import { useEffect, useState } from "react";
import api from "../api/axios";

const AttendanceForm = ({ refresh }) => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  useEffect(() => {
    api.get("employees/").then(res => setEmployees(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("attendance/", form);
    refresh();
  };

  return (
    <div className="card p-4 mb-4">
      <h5>Mark Attendance</h5>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-4">
            <select className="form-select" required
              onChange={e => setForm({...form, employee: e.target.value})}>
              <option value="">Select Employee</option>
              {employees.map(emp => (
                <option key={emp.id} value={emp.id}>
                  {emp.full_name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4">
            <input type="date" className="form-control"
              onChange={e => setForm({...form, date: e.target.value})} required />
          </div>

          <div className="col-md-4">
            <select className="form-select"
              onChange={e => setForm({...form, status: e.target.value})}>
              <option>Present</option>
              <option>Absent</option>
            </select>
          </div>
        </div>

        <button className="btn btn-success mt-3">Submit</button>
      </form>
    </div>
  );
};

export default AttendanceForm;
