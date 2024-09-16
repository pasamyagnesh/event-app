import React from 'react';

function Tabs({ setSelectedDepartment }) {
    const departments = ['CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'AIML'];

    return (
        <div className="flex flex-wrap w-full h-auto gap-4 px-6 md:px-0 md:items-center md:justify-center md:gap-10">
            {departments.map(department => (
                <div className="flex items-center justify-center mb-1" key={department}>
                    <button 
                        onClick={() => setSelectedDepartment(department)}
                        className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">
                        {department}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Tabs;
