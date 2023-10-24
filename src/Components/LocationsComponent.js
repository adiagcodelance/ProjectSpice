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
            <a href={props.locationGoogleMaps}>Directions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LocationsComponent;
