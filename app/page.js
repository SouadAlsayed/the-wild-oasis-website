import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        quality={80}
        placeholder="blur"
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative text-center">
        <h1 className="text-5xl sm:text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-6 py-4 sm:px-8 sm:py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
