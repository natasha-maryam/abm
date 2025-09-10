import Footer from "./components/Footer";
import AboutUs from "./sections/AboutUs";
import BusinessCredit from "./sections/BusinessCredit";
import CustomerRetention from "./sections/CustomerRetention";
import FlexibleApproach from "./sections/FlexibleApproach";
import GrowthMatrix from "./sections/GrowthMatrix";
import HeroSection from "./sections/HeroSection";
import NextStep from "./sections/NextStep";
import Reputation from "./sections/Reputation";
import YouthProgram from "./sections/YouthProgram";

function App() {
  return (
    <div className="overflow-hidden ">
      <HeroSection />
      <AboutUs />
      <GrowthMatrix />
      <BusinessCredit />
      <CustomerRetention />
      <Reputation />
      <FlexibleApproach/>
      <NextStep/>
      <YouthProgram/>
      <Footer/>
    </div>
  );
}

export default App;
