import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { aboutMe } from "@/data/aboutMe";
import { loomVideoUrl } from "@/data/loomVideo";

const getLoomEmbedUrl = (loomUrl: string) => {
  // Handle Loom URLs - extract video ID and create embed URL
  const loomId = loomUrl.match(/loom\.com\/share\/([a-zA-Z0-9]+)/)?.[1];
  if (loomId) {
    return `https://www.loom.com/embed/${loomId}?sid=undefined&t=0`;
  }
  return loomUrl;
};

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

        <div className="mb-8 w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4 text-center">About Me Video</h2>
          <div className="relative w-full overflow-hidden rounded-lg border mx-auto" style={{ 
            paddingBottom: '56.25%',
            minHeight: '200px'
          }}>
            <iframe
              src={getLoomEmbedUrl(loomVideoUrl)}
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              title="About Me - Amaan"
              style={{ 
                border: 'none',
                overflow: 'hidden',
                minHeight: '200px'
              }}
            />
          </div>
        </div>

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
