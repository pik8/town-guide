import Navigation from "@/components/navigation";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
        <Welcome name={'Pics'} />
        <Navigation />
    </main>
  );
}
