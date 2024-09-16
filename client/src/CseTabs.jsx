import React, { useEffect, useState } from 'react';

function CseTabs({ selectedDepartment }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`/api/events/${selectedDepartment}`)
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.error(err));
    }, [selectedDepartment]);

    return (
        <div className="flex flex-col w-full px-6 my-10 md:container md:mx-auto md:px-10">
            <div className="flex mb-5">
                <h1 className="px-3 py-1 text-sm text-left text-gray-500 border border-gray-400 rounded-full md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">
                    {selectedDepartment} Event List
                </h1>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Types of Events</th>
                            <th className="border border-gray-300 px-4 py-2">Topics and Rules</th>
                            <th className="border border-gray-300 px-4 py-2">Prizes / Gifts</th>
                            <th className="border border-gray-300 px-4 py-2">Winners</th>
                            <th className="border border-gray-300 px-4 py-2">Coordinators</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={index}>
                                <td className="px-6 text-xl border font-poppins">{event.eventName}</td>
                                <td className="px-6 py-2 border font-poppins">{event.topics}</td>
                                <td className="px-6 py-2 border font-poppins">{event.prize}</td>
                                <td className="px-6 py-2 text-center border font-poppins">{event.winners}</td>
                                <td className="px-6 py-2 border font-poppins">{event.coordinators}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CseTabs;
