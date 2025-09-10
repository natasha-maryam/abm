import AboutUs from "./sections/AboutUs";
import BusinessCredit from "./sections/BusinessCredit";
import CustomerRetention from "./sections/CustomerRetention";
import GrowthMatrix from "./sections/GrowthMatrix";
import HeroSection from "./sections/HeroSection";
import Reputation from "./sections/Reputation";

function App() {
  return (
    <div className="overflow-hidden " >
      <HeroSection />
       <AboutUs/>
     <GrowthMatrix/>
       <BusinessCredit/>
      <CustomerRetention/> 
      <Reputation/>
      <br/>
    </div>
  );
}

export default App;
