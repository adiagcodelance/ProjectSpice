import "./MegaHeader.css";

const MegaHeader = (props) => {
  return (
    <div className="mega-header-component">
      <div className="header">
        <div className="mega-header">
          <label>{props.megaHeader}</label>
        </div>
      </div>
      <div className="banner-image">
        <img
          className="banner-image-item"
          src={process.env.PUBLIC_URL + props.image}
          alt="placeholder"
        ></img>
      </div>
    </div>
  );
};

export default MegaHeader;
