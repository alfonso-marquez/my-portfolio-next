import { Button } from "@/components/ui/button";
import InstagramIcon from "@/components/icons/instagramIcon";
import TiktokIcon from "@/components/icons/tiktokIcon";
import Image from "next/image";
import { MediaProjects } from "@/components/mediaProjects";
import { photoProjects } from "@/lib/data";
import { ratioOf } from "@/lib/photoRatios";

export default function MediaPage() {
    return (
        <div className="font-sans items-center justify-items-center pb-20 gap-16">
            {/* Photos open the page; the heading is for screen readers and search only */}
            <section id="projects" className="w-full pt-20 lg:pt-24">
                <h1 className="sr-only">Photos by Alfonso Marquez</h1>
                <MediaProjects
                    projects={photoProjects.filter((p) => !p.hidden).map((p) => ({ ...p, ratio: p.coverRatio ?? ratioOf(p.cover) }))}
                />
            </section>

            {/* "Let's fight somewhere empty" meme opens the section: the challenge, then the fight */}
            <section id="video" className="container flex flex-col items-center gap-6 px-8 py-16">
                {/* Source is 800px wide, so cap near that to keep it sharp */}
                <Image
                    src="/images/media/memes/lets-fight-somewhere-empty.jpg"
                    alt="Goku and Vegeta from Dragon Ball Kai, captioned: Let's fight somewhere empty"
                    width={800}
                    height={450}
                    sizes="(min-width: 896px) 896px, 100vw"
                    className="h-auto w-full max-w-4xl"
                />
                <Image
                    src="/images/media/memes/lets-fight-somewhere-empty-fight.png"
                    alt="Goku and Vegeta trading punches"
                    width={426}
                    height={384}
                    sizes="320px"
                    className="mb-6 h-auto w-64 sm:w-80"
                />
                <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-5xl lg:max-w-3xl">Videos</h2>
                <p className="text-center text-lg leading-relaxed text-muted-foreground lg:text-xl md:max-w-2xl">
                    Reels and gig clips, shot and edited by me. Watch them on my socials.
                </p>
                <div className="flex w-full flex-col justify-center gap-2 sm:w-auto sm:flex-row">
                    <Button asChild variant="outline" size="lg">
                        <a href="https://www.tiktok.com/@alfonsomrqz" target="_blank" rel="noopener noreferrer">
                            <TiktokIcon />
                            TikTok
                        </a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <a href="https://www.instagram.com/alfonsomrqz/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                            Instagram
                        </a>
                    </Button>
                </div>
            </section>
        </div>
    );
}