

const ClassesCard = ({ card }) => {
     const {image,price,name,InstructorName,description}=card;
     return (
          <div className=" w-full">
               <div className="  relative  bg-white shadow-lg rounded-lg overflow-hidden">
                    <img className=" relative w-full h-80" src={image} alt='img-fluid' />
                    <div className="p-4 text-center relative">
                         <h1 className=" text-2xl text-blue-500 font-semibold my-2 italic"> {name} </h1>
                         <h1 className=" text-base font-semibold my-2 D59578"> Instructor: {InstructorName} </h1>
                         
                          <p className=" font-color text-sm "> {description} </p>
                         <button className="mt-2   text-white bg-[#D59578]  max-w-xs  w-full font-bold py-2 px-4 rounded">
                              Select
                          </button>

                    </div>
                    <p className=" left-0 text-lg absolute top-0  font-semibold text-white  bg-[#D59578] px-4 py-1 ">${price}</p>
               </div>
          </div>
     );
};

export default ClassesCard;