import "../app/globals.css";
import Navigation from "@/components/navigation";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
    const router = useRouter();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-16">
            <div className="w-full">
                {children}
            </div>
            <Navigation currentRoute={router.pathname} />
        </main>
    )
}