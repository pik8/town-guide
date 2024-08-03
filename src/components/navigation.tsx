import Link from 'next/link';
import { IoHomeOutline } from "react-icons/io5";

export default function Navigation() {
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select id="Tab" defaultValue="test" className="w-full rounded-md border-gray-200">
                    <option value="test">Settings</option>
                    <option>Messages</option>
                    <option>Archive</option>
                    <option>Notifications</option>
                </select>
            </div>

            <div className="hidden sm:block">
                <nav className="flex gap-6" aria-label="Tabs">
                    <Link
                        href="#"
                        className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
                    >
                        <IoHomeOutline />
                    </Link>
                    <Link
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                    >
                        House Book
                    </Link>
                    <Link
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Fuzeta
                    </Link>
                    <Link
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Recommendations
                    </Link>
                    <Link
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Events
                    </Link>
                    <Link
                        href="#"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Local Recipes
                    </Link>
                    <Link
                        href="/messages"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                    >
                        Messages
                    </Link>
                </nav>
            </div>
        </div>
    );
}
