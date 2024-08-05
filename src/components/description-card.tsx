import { Image } from "@/types/types";

interface DescriptionCard {
    id: string;
    title: string;
    description: string;
    instructions?: string;
    pictures?: Image[];
    location?: { latitude: number; longitude: number; };
}

export default function DescriptionCard({ item }: { item: DescriptionCard }) {
    return (
        <div className="lg:w-1/2 p-4 rounded-md">
            <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
            <p>{item.description}</p>
            <div dangerouslySetInnerHTML={{ __html: item.instructions ? item.instructions : item.description }} />
        </div>
    );
};
