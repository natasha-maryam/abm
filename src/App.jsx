import AboutUs from "./sections/AboutUs";
import BusinessCredit from "./sections/BusinessCredit";
import CustomerRetention from "./sections/CustomerRetention";
import GrowthMatrix from "./sections/GrowthMatrix";
import HeroSection from "./sections/HeroSection";

function App() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutUs/>
      <GrowthMatrix/>
      <BusinessCredit/>
      <CustomerRetention/>
      <br/>
    </div>
  );
}

export default App;
