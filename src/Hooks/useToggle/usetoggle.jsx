
const UseToggle = () => {
   
     const handleChage=(event)=>{
           
           if(event.target.checked==true){
               document.body.style.backgroundColor="black";
              
           }else{
               document.body.style.backgroundColor="white";
             
           }
     }
     return (
       <div className='  '>
          <input onClick={handleChage} type="checkbox" className="toggle"  />
       </div>
     );
};

export default UseToggle;