import { useState } from 'react';
import { Image, Recommendation, UserGuide } from "@/types/types";
import DescriptionCard from "@/components/description-card";

type ItemProps<T> = {
    items: T[];
};

interface HalfListItem {
    id: string;
    title: string;
    description: string;
    instructions?: string;
    pictures: Image[];
    location?: { latitude: number; longitude: number; };
}

export default function HalfList<T extends UserGuide | Recommendation>({ items }: ItemProps<T>) {
    const test: HalfListItem[] = [];
    items.forEach((item) => {
        // UserGuide
        if ('instructions' in item) {
            test.push({
                id: item.id,
                title: item.title,
                description: item.description,
                instructions: item.instructions.html,
                pictures: item.pictures,
            } as HalfListItem);
        } else if ('category' in item) {
            // Recommendation
            test.push({
                id: item.id,
                title: item.title,
                description: item.description.html,
                pictures: item.pictures,
                location: item.location,
            } as HalfListItem);
        }
    });

    const [selectedItem, setSelectedItem] = useState(test ? test[0] : null);

    if (!test) {
        return (<div>Ups! Nothing to show</div>)
    }

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 overflow-y-auto p-4">
                <ul>
                    {test.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className={`p-2 border-b border-sky-100 cursor-pointer ${selectedItem && selectedItem.id === item.id ? 'bg-sky-50' : 'bg-white'}`}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedItem && (
                <DescriptionCard item={selectedItem} />
            )}
        </div>
    );
};
