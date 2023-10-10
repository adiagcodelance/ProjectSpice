import "./Form.css";

const Form = (props) => {
  return (
    <div className="form-container">
      <div className="contact-form">
        <form id="contact-form-01" action="/">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" placeholder="First Name"></input>

          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" placeholder="Last Name"></input>

          <label htmlFor="pnumber">Phone Number</label>
          <input
            type="tel"
            name="pnumber"
            placeholder="(123) 456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          ></input>
          <label htmlFor="email">E-mail</label>
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
      <div className="contact-form-image">
        <img
          className="contact-form-image-item"
          src={process.env.PUBLIC_URL + props.image}
          alt="placeholder"
        ></img>
      </div>
    </div>
  );
};

export default Form;
