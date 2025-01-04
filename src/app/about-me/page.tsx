import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <header className="w-full p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          About Me
        </h1>
      </header>

      <section className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 flex flex-col items-center">
        <p className="mb-8 text-center text-lg sm:text-xl md:text-2xl leading-relaxed">
          Hello! I&apos;m a passionate web developer specializing in React,
          Next.js, and modern web technologies. With a keen eye for design and a
          love for clean, efficient code, I strive to create engaging and
          user-friendly web experiences. When I&apos;m not coding, you can find
          me exploring new technologies, contributing to open-source projects,
          or sharing my knowledge through blog posts and tutorials.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link href="/socials">Socials</Link>
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
