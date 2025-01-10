import NavBar from './components/NavBar';
import ServiceCards from './serviceCards/page';
import CryptoOptions from './cryptoOptions/page'; 
import Opportunities from './opportunities/page';
import FeaturedOn from './featured/page';
import BankOnYourTerms from './gotIt/page';
import DantownHappiness from './usingDantown/page';
import StepsNow from './takeTheseSteps/page';
import Footer from './components/footer/page';
import MetaHead from './components/metaHead/page'; // Import MetaHead component

export const metadata = {
  title: "Trade Cryptocurrencies With Ease | Pay Bills With Crypto | Dantown",
  description: "Experience seamless cryptocurrency trading and bill payments with Dantown. Secure, fast, and reliable solutions tailored to your needs.",
  icons: {
    icon: "/godantownLogo.png", // Path to your logo in the public directory
  },
};

export default function Home() {
  return (
    <div>
      {/* MetaHead for Page Metadata */}
      <MetaHead
        title={metadata.title}
        description={metadata.description}
        favicon={metadata.icons.icon} // Pass the logo to MetaHead
      />
      
      <NavBar/>
      <ServiceCards/>
      <CryptoOptions/>
      <Opportunities/>
      <FeaturedOn/>
      <BankOnYourTerms/>
      <DantownHappiness/>
      <StepsNow/>
      <Footer/>
    </div>
  );
}
