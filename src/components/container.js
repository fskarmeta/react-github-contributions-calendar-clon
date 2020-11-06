const CalendarContainer = ({ children }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="overcontainer">{children}</div>
      </div>
    </div>
  );
};

export default CalendarContainer;
