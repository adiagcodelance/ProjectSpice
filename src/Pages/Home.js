import HeroComponent from "../Components/HeroComponents";

const Home = () => {
  return (
    <div className="Home">
      Home
      <HeroComponent
        largeHeader="Desi Food Stuff, Spice Store Is Bringing Home Closer To You."
        mediumHeader="Looking for the right brands and the right flavours, visit The Spice Store and find all your favorite foods at competitive prices."
      />
      <button>Find A Location Near you</button>
      <HeroComponent
        largeHeader="What Makes Us Different"
        mediumHeader="Brands both loved and found at home from trusted suppliers, we believe in providing our customers with SPICE experience which stands for great Service at the best Prices in an Inviting and Clean Environment.
        Find us in your neighborhood soon with out fast growing number of store we hope to bring you food and comfort in as many neighborhoods and provinces in Canada."
      />
      <div className="large-header"></div>
      <div className="medium-header"></div>
    </div>
  );
};

export default Home;
