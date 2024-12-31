
import NavBar from './components/NavBar';
import ServiceCards from './serviceCards/page';
import CryptoOptions from './cryptoOptions/page'; 
import Opportunities from './opportunities/page';
import FeaturedOn from './featured/page';
import BankOnYourTerms from './gotIt/page';
import DantownHappiness from './usingDantown/page';
import './globalStyles/globals.css'; // Import global styles

export default function Home() {
  return (
    <div>
      <NavBar/>
      <ServiceCards/>
      <CryptoOptions/>
      <Opportunities/>
      <FeaturedOn/>
      <BankOnYourTerms/>
      <DantownHappiness/>
    </div>
  );
}
