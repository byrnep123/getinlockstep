import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Hello, Lockstep 👋</h1>
        <Button>Get in Lockstep</Button>
      </div>
    </main>
  );
}
