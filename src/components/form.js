const Form = ({ calendar, getName, submitForm }) => {
  return (
    <div className="col-md-6">
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            onChange={(e) => getName(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="day">Day</label>
          <select
            className="form-control"
            id="day"
            name="day"
            onChange={(e) => getName(e)}
          >
            {calendar.map((item, i) => (
              <option key={i}>{item.title}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="text">Say something</label>
          <textarea
            className="form-control"
            id="text"
            name="text"
            rows="3"
            onChange={(e) => getName(e)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Contribute
        </button>
      </form>
    </div>
  );
};

export default Form;
