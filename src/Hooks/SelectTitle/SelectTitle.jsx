

const SelectTitle = ({subtitle,HadersTitle}) => {
     return (
          <div className=" my-7 text-center space-y-5">
                <p className='  font-color text-lg font-medium  italic'> {subtitle} </p>
                <h1 className=' font-color text-4xl font-bold  my-4 '> {HadersTitle} </h1>
          </div>
     );
};

export default SelectTitle;