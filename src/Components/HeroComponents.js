const HeroComponents = (props) => {
  return (
    <div className="hero-component">
      <div className="large-header">{props.largeHeader}</div>
      <div className="medium-header">{props.mediumHeader}</div>
      <div className="hero-image"></div>
    </div>
  );
};

export default HeroComponents;
