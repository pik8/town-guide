import Link from 'next/link';
import { IoHomeOutline } from "react-icons/io5";

export default function Navigation(props: { currentRoute: string }) {
    return (
        <nav className="w-full" aria-label="Navigation Tabs">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select a page</label>
                <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-sky-100 focus:border-sky-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Home</option>
                    <option>House Book</option>
                    <option>Fuzeta</option>
                    <option>Recommendations</option>
                    <option>Events</option>
                    <option>Local Recipes</option>
                    <option>Messages</option>
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li className="w-full focus-within:z-10">
                    <Link
                        href="/"
                        className={`${props.currentRoute === '/' && 'bg-gray-100'} flex justify-center w-full p-4 text-gray-900 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring focus:ring-sky-100 active focus:outline-none dark:bg-gray-700 dark:text-white`}
                    >
                        <IoHomeOutline size={20} />
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link
                        href="/house-book"
                        className={`${props.currentRoute === '/house-book' && 'bg-gray-100'} inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring focus:ring-sky-100 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                        House Book
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link
                        href="/about"
                        className={`${props.currentRoute === '/about' && 'bg-gray-100'} inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring focus:ring-sky-100 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                        Fuzeta
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link
                        href="/recommendations"
                        className={`${props.currentRoute === '/recommendations' && 'bg-gray-100'} inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring focus:ring-sky-100 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                        Recommendations
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link
                        href="/events"
                        className={`${props.currentRoute === '/events' && 'bg-gray-100'} inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring focus:ring-sky-100 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                        Events
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link
                        href="/recipes"
                        className={`${props.currentRoute === '/recipes' && 'bg-gray-100'} inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring focus:ring-sky-100 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                        Local Recipes
                    </Link>
                </li>
                <li className="w-full focus-within:z-10">
                    <Link
                        href="/messages"
                        className={`${props.currentRoute === '/messages' && 'bg-gray-100'} inline-block w-full p-4 border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring focus:outline-none focus:ring-sky-100 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                        Messages
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
