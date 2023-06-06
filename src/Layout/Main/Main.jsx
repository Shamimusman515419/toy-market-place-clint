import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";


const Main = () => {
     return (
          <div>
               <Navber></Navber>

               <div className=" mt-12   min-h-[500px]">
                    <Outlet></Outlet>

               </div>
               <Footer></Footer>
          </div>
     );
};

export default Main;