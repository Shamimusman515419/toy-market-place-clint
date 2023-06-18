
import BannerSlider from "../BannerSlider/BannerSlider";
import Popularinstrctor from "../PopularInstractor/Popularinstrctor";
import AboutSection from "./AboutSections/AboutSection";
// import Banner from "./Banner";
import Popularclass from "./Popularclass";



const Home = () => {
     return (
          <div> 
               <BannerSlider></BannerSlider>
              
             {/* <Banner></Banner> */}
             <Popularclass></Popularclass>
            
             <Popularinstrctor></Popularinstrctor>
             <AboutSection></AboutSection>
          </div>
     );
};

export default Home;