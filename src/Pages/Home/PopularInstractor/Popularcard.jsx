import { Link } from "react-router-dom";


const Popularcard = ({ card }) => {

     const { img, name,numStudents ,email} = card
     return (
          <div>
               <div className="card w-96 bg-base-100 shadow">
                    <figure><img className=" h-80 w-full" src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title font-bold text-3xl  font-color">{name}</h2>
                         <p className=" font-color  text-lg font-medium"> Student : {numStudents} </p>
                          <p className=" font-color text-base"> {email} </p>
                          <Link className=" text-blue-500 underline "> learn more </Link> 
                    </div>
               </div>
          </div>
     );
};

export default Popularcard;