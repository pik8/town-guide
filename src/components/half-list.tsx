import { useState } from 'react';

const members = [
    { id: 1, name: 'John Doe', content: 'John Doe Content' },
    { id: 2, name: 'Jane Smith', content: 'Jane Smith Content' },
    { id: 3, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 4, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 5, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 6, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 7, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 8, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 9, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 10, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 11, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 12, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 13, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 14, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 15, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 16, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 17, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 18, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 19, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 20, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 21, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 22, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 23, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 24, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 25, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    { id: 26, name: 'Alice Johnson', content: 'Alice Johnson Content' },
    // Add more members as needed
];

export default function HalfList() {
    const [selectedMember, setSelectedMember] = useState(members[0]);

    return (
        <div className="flex flex-col lg:flex-row shadow rounded-md" style={{ maxHeight: '68dvh' }}>
            {/* Scrollable list */}
            <div className="lg:w-1/2 overflow-y-auto bg-gray-100 p-4">
                <ul>
                    {members.map((member) => (
                        <li
                            key={member.id}
                            onClick={() => setSelectedMember(member)}
                            className={`p-2 border-b border-sky-100 cursor-pointer ${selectedMember.id === member.id ? 'bg-sky-50' : 'bg-white'}`}
                        >
                            {member.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Member content */}
            <div className="lg:w-1/2 p-4 bg-white rounded-md">
                <h1 className="text-2xl font-bold mb-4">{selectedMember.name}</h1>
                <p>{selectedMember.content}</p>
            </div>
        </div>
    );
};
