import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mainsection from "../components/Mainsection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="max-w-[99%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] w-full bg-white mx-auto px-5 mt-2">
      <Navbar />
      <Hero />
      <Mainsection />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
