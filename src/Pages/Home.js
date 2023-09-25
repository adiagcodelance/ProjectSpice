import HeroComponent from "../Components/HeroComponents";

const Home = () => {
  return (
    <div className="Home">
      Home
      <HeroComponent
        largeHeader="Desi Food Stuff, Spice Store Is Bringing Home Closer To You."
        mediumHeader="Looking for the right brands and the right flavours, visit The Spice Store and find all your favorite foods at competitive prices."
      />
      <HeroComponent
        largeHeader="What Makes Us Different"
        mediumHeader="Brands both loved and found at home from trusted suppliers, consistency, competitive prices, quality service, and cleanliness."
      />
      <div className="large-header"></div>
      <div className="medium-header"></div>
      <button>Find A Location Near you</button>
    </div>
  );
};

export default Home;
