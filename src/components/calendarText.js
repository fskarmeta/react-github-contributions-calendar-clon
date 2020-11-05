const CalendarText = ({ monthText, datesArr }) => {
  return (
    <>
      <div className="monthstext">
        {monthText.map((e, i) => (
          <div className="monthtext" key={i}>
            {e}
          </div>
        ))}
      </div>
      <div className="days">
        {datesArr.map((e, i) => (
          <div className="daystext" key={i}>
            {e}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarText;
