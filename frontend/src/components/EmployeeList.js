import api from "../api/axios";

const EmployeeList = ({ employees, refresh }) => {

  const deleteEmployee = async (id) => {
    await api.delete(`employees/${id}/`);
    refresh();
  };

  if (!employees.length)
    return <div className="alert alert-info">No Employees Found</div>;

  return (
    <div className="card p-4">
      <h5>Employee List</h5>
      <table className="table table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.employee_id}</td>
              <td>{emp.full_name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button className="btn btn-sm btn-danger"
                  onClick={() => deleteEmployee(emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
