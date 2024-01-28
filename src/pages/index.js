import HomePage from "@/components/home/Home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <HomePage />
    </main>
  );
}
