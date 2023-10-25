import "./LocationsComponent.css";

const LocationsComponent = (props) => {
  return (
    <div className="location-comp">
      <div className="location-image">
        <img
          className="location-item"
          src={process.env.PUBLIC_URL + props.image}
        ></img>
      </div>
      <div className="location-information">
        <label id="location-title">{props.locationTitle}</label>
        <ul>
          <li>{props.locationAddress}</li>
          <li>{props.locationCity}</li>
          <li>{props.locationProvince}</li>
          <li>{props.locationPostal}</li>
          <li>{props.locationNumber}</li>
          <li>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11036.166378338352!2d-63.1386836!3d46.2494009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52bba4d43fc5%3A0xfcea4e6bb4821101!2sThe%20Spice%20Store!5e0!3m2!1sen!2sca!4v1698247857399!5m2!1sen!2sca"
              width="400"
              height="300"
              style={{ border: "0", paddingTop: "10px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationsComponent;
