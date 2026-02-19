import { useState } from "react";
import api from "../api/axios";

const EmployeeForm = ({ refresh }) => {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("employees/", form);
    refresh();
    setForm({ employee_id: "", full_name: "", email: "", department: "" });
  };

  return (
    <div className="card p-4 mb-4">
      <h5>Add Employee</h5>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-3">
            <input className="form-control" placeholder="Employee ID"
              value={form.employee_id}
              onChange={e => setForm({...form, employee_id: e.target.value})} required />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Full Name"
              value={form.full_name}
              onChange={e => setForm({...form, full_name: e.target.value})} required />
          </div>
          <div className="col-md-3">
            <input type="email" className="form-control" placeholder="Email"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})} required />
          </div>
          <div className="col-md-3">
            <input className="form-control" placeholder="Department"
              value={form.department}
              onChange={e => setForm({...form, department: e.target.value})} required />
          </div>
        </div>

        <button className="btn btn-primary mt-3">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
