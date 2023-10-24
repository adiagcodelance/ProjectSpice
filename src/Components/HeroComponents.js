import "./HeroComponents.css";

const HeroComponents = (props) => {
  return (
    <div className="hero-component">
      <div className="hero-text-content">
        <div className="large-header">
          <label>{props.largeHeader}</label>
        </div>
        <div className="medium-header">
          <label>{props.mediumHeader}</label>
        </div>
      </div>
      <div className="vertical-spacer"></div>
      <div className="hero-image">
        <img src={process.env.PUBLIC_URL + props.image} alt="placeholder"></img>
      </div>
    </div>
  );
};

export default HeroComponents;
