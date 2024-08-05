import { LuWaves, LuCalendarDays } from "react-icons/lu";
import DynamicIcon from "@/components/dynamic-icon";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";

export default function Dashboard() {
    return (
        <div className="flex space-x-4">
            <div className="w-1/4">
                <div className="flex items-center justify-center h-64 min-h-full max-w-xs overflow-hidden rounded-md shadow-md bg-gray-100">
                    <DynamicIcon iconName={'sunny'} size={100} />
                </div>
            </div>
            <div className="w-1/4">
                <div className="flex items-center justify-center h-64 max-w-xs overflow-hidden rounded-md shadow-md bg-gray-100">
                    <LuWaves size={100} />
                </div>
            </div>
            <div className="w-1/4">
                <div className="flex items-center justify-center h-64 max-w-xs overflow-hidden rounded-md shadow-md bg-gray-100">
                    <MdOutlinePhotoSizeSelectActual size={100} />
                </div>
            </div>
            <div className="w-1/4">
                <div className="flex items-center justify-center h-64 max-w-xs overflow-hidden rounded-md shadow-md bg-gray-100">
                    <LuCalendarDays size={100} />
                </div>
            </div>
        </div>
    );
};
