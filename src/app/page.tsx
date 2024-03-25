import Header from "@/components/ui/header";
import { SessionProvider } from "next-auth/react";
import LandingPage from "./landing-page";

export default async function Home() {
  return (
    <SessionProvider>
      <Header />

      <main className="h-[calc(100vh-5rem)] flex items-center justify-center">
        <LandingPage />
      </main>
    </SessionProvider>
  );
}
