import "./FranchiseForm.css";

const FranchiseForm = (props) => {
  return (
    <div className="franchise-form-container">
      <div className="form">
        <form id="franchise-form-01" action="/">
          <label for="fname">First Name</label>
          <input type="text" name="fname" placeholder="First Name"></input>

          <label for="lname">Last Name</label>
          <input type="text" name="lname" placeholder="Last Name"></input>

          <label for="pnumber">Phone Number</label>
          <input
            type="tel"
            name="pnumber"
            placeholder="(123) 456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          ></input>
          <label for="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
          ></input>
          <div className="submit-form-button">
            <input type="submit" id="submit-button" value="Submit"></input>
          </div>
        </form>
      </div>
      <div className="form-image">
        <img
          className="form-image-item"
          src={process.env.PUBLIC_URL + props.image}
          alt="placeholder"
        ></img>
      </div>
    </div>
  );
};

export default FranchiseForm;
