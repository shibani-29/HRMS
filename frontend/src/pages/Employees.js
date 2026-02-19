import { useEffect, useState } from "react";
import api from "../api/axios";
import Loader from "../components/Loader";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

const Employees = () => {
  const [employees, setEmployees] = useState(null);

  const fetchEmployees = () => {
    api.get("employees/").then(res => setEmployees(res.data));
  };

  useEffect(fetchEmployees, []);

  if (!employees) return <Loader />;

  return (
    <div className="container mt-4">
      <EmployeeForm refresh={fetchEmployees} />
      <EmployeeList employees={employees} refresh={fetchEmployees} />
    </div>
  );
};

export default Employees;
