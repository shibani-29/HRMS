const AlertMessage = ({ message, type = "danger" }) => {
  if (!message) return null;

  return (
    <div className={`alert alert-${type} mt-3`}>
      {message}
    </div>
  );
};

export default AlertMessage;