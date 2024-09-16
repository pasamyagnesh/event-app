import React, { useState } from 'react';
import Tabs from './Tabs';

function App() {
    // Set 'CSE' as the default selected tab
    const [selectedDepartment, setSelectedDepartment] = useState('CSE');

    return (
        <div>
            <Tabs 
                selectedDepartment={selectedDepartment} 
                setSelectedDepartment={setSelectedDepartment} 
            />
            {/* Render other content based on selectedDepartment */}
            <div className="p-6">
                <h1 className="text-2xl font-bold">Selected Department: {selectedDepartment}</h1>
                {/* You can show department-specific data here */}
            </div>
        </div>
    );
}

export default App;
