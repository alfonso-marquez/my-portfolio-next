import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import InstagramIcon from "@/components/icons/instagramIcon";
import TiktokIcon from "@/components/icons/tiktokIcon";
import Image from "next/image";
import { MediaProjects } from "@/components/mediaProjects";
import { photoProjects } from "@/lib/data";
import { ratioOf } from "@/lib/photoRatios";

const title = "Photos & Videos — Alfonso Marquez";
const description = "Concert and gig photography and live videos by Alfonso Marquez, based in the Philippines.";

export const metadata: Metadata = {
    title,
    description,
    // Link preview uses the site-wide portrait (src/app/opengraph-image.jpg); only artist
    // pages get their own cover. Named here because a page's openGraph replaces the inherited one.
    openGraph: {
        title,
        description,
        url: "/media",
        siteName: "Alfonso Marquez",
        type: "website",
        images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Alfonso Marquez walking between tiled walls, in black and white" }],
    },
};

// YouTube embeds in the Videos section, in display order. `id` is the part after /embed/.
// Empty the list and the section shows the "Let's fight somewhere empty" meme instead.
const videos: { id: string; title: string }[] = [
    { id: "dtgwojxVaDk", title: "One Click Straight - BROke (Live at SHANNi's Cure for Loneliness EP Launch)" },
    { id: "zv4lZ16zQpM", title: "Suyen - IMNIDA (Live at SHANNi's Cure for Loneliness EP Launch)" },
    { id: "4ohtVNvNAvg", title: "Johnoy Danao - Aking Mahal (20 Years of Wabi-Sabi, Street Kohi)" },
];

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

            <section id="video" className="container flex flex-col items-center gap-6 px-8 py-16">
                {/* With no videos listed, the "Let's fight somewhere empty" meme fills the section:
                    the challenge, then the fight. Source is 800px wide, so cap near that to keep it sharp. */}
                {videos.length === 0 && (
                    <>
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
                    </>
                )}
                <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-5xl lg:max-w-3xl">Videos</h2>
                <p className="text-center text-lg leading-relaxed text-muted-foreground lg:text-xl md:max-w-2xl">
                    Reels and gig clips, shot and edited by me. Watch them on my socials.
                </p>
                {videos.length > 0 && (
                    <div className="my-4 grid w-full max-w-6xl gap-4 md:grid-cols-2">
                        {videos.map((v) => (
                            <div key={v.id} className="aspect-video w-full overflow-hidden rounded-lg">
                                <iframe
                                    src={`https://www.youtube.com/embed/${v.id}`}
                                    title={v.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    loading="lazy"
                                    className="h-full w-full border-0"
                                />
                            </div>
                        ))}
                    </div>
                )}
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