import React from 'react';

const Container = ({children}) => {
     return (
          <div className='md:max-w-[1018px] bg-white    lg:max-w-[1400px]   xl:max-w-[1600px] 2xl:max-w-[2200px]   md:px-10 lg:px-16 xl:px-20 2xl:px-24 mx-auto '>
               {children}
               
          </div>
     );
};

export default Container;