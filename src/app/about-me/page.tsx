import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { aboutMe } from "@/data/aboutMe";

export default function AboutMe() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <header className="w-full p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          About Me
        </h1>
      </header>

      <section className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-8 flex flex-col items-center">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-8 rounded-none overflow-hidden">
          <Image
            src="/amaan.jpg"
            alt="Amaan's profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>

        <p className="mb-8 text-center text-lg sm:text-xl md:text-2xl leading-relaxed">
          {aboutMe}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="https://x.com/amaan8429" target="_blank">
              Twitter
            </Link>
          </Button>
          <Button asChild>
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild>
            <Link href="/blogs">Blogs</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
