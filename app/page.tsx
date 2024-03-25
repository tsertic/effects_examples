import { EXAMPLE_PATHS } from "@/static";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <ul className="flex flex-col items-center gap-2">
        {EXAMPLE_PATHS.map((item) => {
          return (
            <li key={item.id} className="uppercase text-lg text-blue-600">
              / <Link href={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
