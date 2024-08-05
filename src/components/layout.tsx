import "../app/globals.css";
import Navigation from "@/components/navigation";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import React from "react";
import { routerMapper } from "@/types/routerMapping";
import './global.scss';

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
            <button className="bg-white absolute top-18 left-16 flex shadow rounded-md p-2" type="button" onClick={() => router.back()}>
                <IoMdArrowBack size={25} className="mr-1" /><span className="mr-1">Back</span>
            </button>
            <div className="w-full">
                <h1 className="text-2xl text-gray-700 text-center mb-4">{ routerMapper.get(router.pathname) }</h1>
                <div className="w-full bg-white rounded-md shadow p-4" style={{ maxHeight: '68dvh', minHeight: '68dvh', overflowY: 'scroll' }}>
                    {children}
                </div>
            </div>
            <Navigation currentRoute={router.pathname} />
        </main>
    )
}