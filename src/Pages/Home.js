import Footer from "../Components/Footer";
import HeroComponent from "../Components/HeroComponents";
import Navbar from "../Components/Navbar";
import ReverseHeroComp from "../Components/ReverHeroComp";
import "./Home.css";
const Home = () => {
  return (
    <html>
      <title>Home - Project Spice</title>
      <head></head>
      <div className="spacer"></div>
      <body>
        <header></header>
        <section id="ad-home">
          <div className="ad-home-content">
            <HeroComponent
              largeHeader="Desi Food Stuff, Spice Store Is Bringing Home Closer To You."
              mediumHeader="Looking for the right brands and the right flavours, visit The Spice Store and find all your favorite foods at competitive prices."
              image="/placeholder.jpg"
            />
            <div className="spacer"></div>
            <button>Find A Location Near You</button>
            <div className="spacer"></div>
            <hr />
            <div className="spacer"></div>
            <ReverseHeroComp
              largeHeader="What Makes Us Different"
              mediumHeader="Brands both loved and found at home from trusted suppliers, we believe in providing our customers with the SPICE experience which stands for great Service at the best Prices in an Inviting and Clean Environment.
        Find us in your neighborhood soon with out fast growing number of stores, we hope to bring you food and comfort in every neighborhood and province in Canada."
              image="/placeholder.jpg"
            />
            <div className="large-header"></div>
            <div className="medium-header"></div>
          </div>
        </section>
      </body>
    </html>
  );
};

export default Home;
