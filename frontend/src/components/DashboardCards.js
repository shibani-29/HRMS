const DashboardCards = ({ totalEmployees, totalAttendance }) => {
  return (
    <div className="row mt-4">
      <div className="col-md-6">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body text-center">
            <h5>Total Employees</h5>
            <h2>{totalEmployees}</h2>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card text-white bg-success mb-3">
          <div className="card-body text-center">
            <h5>Total Attendance Records</h5>
            <h2>{totalAttendance}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
