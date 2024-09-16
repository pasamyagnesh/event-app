import React, { useRef } from 'react';
function EpistemiconHomePage() {
   
    return(
        <div className="flex flex-col items-center justify-center w-full px-6  md:gap-0 gap-4 mx-auto h-[650px] md:h-screen">
             <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-full md:text-md backdrop-filter backdrop-blur-xl bg-green-400/30 font-poppins">SEP-28-2024</h1>
            </div>
            
           
          
            <div className="flex items-center justify-center ">
                    <h1 className="font-medium text-[35px] md:text-[88px] text-center font-Vogue">EPISTEMICON - 2K24</h1>
            </div>

            <div className="flex flex-col items-center justify-center -mt-3">
                        <h1 className="text-sm text-center text-gray-500 md:text-lg font-poppins text-wrap">Organized by </h1>
                        <h1 className="text-sm text-center text-gray-500 md:text-lg font-poppins text-wrap">Andhra Loyola Institute of Engineering and Technology, Vijayawada</h1>

                </div>
            
               

            <div className="flex items-center justify-center mt-[20px]">
            <a href="#upwards" className="flex items-center justify-center px-6 py-2 font-medium text-white bg-black rounded-lg font-poppins">
                    Learn More
            </a></div>  
            
           
        </div>
    );
}

export default EpistemiconHomePage;

