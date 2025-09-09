import AboutUs from "./sections/AboutUs";
import GrowthMatrix from "./sections/GrowthMatrix";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutUs/>
      <GrowthMatrix/>
      <br/>
    </div>
  );
}

export default App;
