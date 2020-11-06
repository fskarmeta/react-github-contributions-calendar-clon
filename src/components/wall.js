const Wall = ({ wall }) => {
  return (
    <div className="col-md-6 justify-content-center pt-4 pr-4">
      {wall.map((item, i) => (
        <div className="row  d-flex justify-content-between" key={i}>
          <div>
            <span className="nameText">{item.name} : </span>
            <span className="itemText">{item.text}</span>
          </div>
          <div>
            <span className="dateText">{item.day}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wall;
