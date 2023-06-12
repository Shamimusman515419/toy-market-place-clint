
import Popularinstrctor from "../PopularInstractor/Popularinstrctor";
import AboutSection from "./AboutSections/AboutSection";
import Banner from "./Banner";
import Popularclass from "./Popularclass";



const Home = () => {
     return (
          <div>
              
             <Banner></Banner>
             <Popularclass></Popularclass>
             <Popularinstrctor></Popularinstrctor>
             <AboutSection></AboutSection>
          </div>
     );
};

export default Home;