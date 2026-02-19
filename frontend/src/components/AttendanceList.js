const AttendanceList = ({ records }) => {

  if (!records.length)
    return <div className="alert alert-info">No Attendance Records</div>;

  return (
    <div className="card p-4">
      <h5>Attendance Records</h5>
      <table className="table table-bordered mt-3">
        <thead className="table-dark">
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map(rec => (
            <tr key={rec.id}>
              <td>{rec.employee}</td>
              <td>{rec.date}</td>
              <td>
                <span className={`badge ${rec.status === "Present" ? "bg-success" : "bg-danger"}`}>
                  {rec.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
