import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import InstagramIcon from "@/components/icons/instagramIcon";
import TiktokIcon from "@/components/icons/tiktokIcon";
import YoutubeIcon from "@/components/icons/youtubeIcon";
import { ContactSection } from "@/components/contactSection";
import { MediaProjects } from "@/components/mediaProjects";
import { mediaCategories } from "@/lib/data";

const socials = [
    { href: "https://www.instagram.com/alfonsomrqz/", label: "Instagram", icon: <InstagramIcon /> },
    { href: "https://www.tiktok.com/@alfonsomrqz", label: "TikTok", icon: <TiktokIcon /> },
    { href: "https://www.youtube.com/@alfonsomarquez2077", label: "YouTube", icon: <YoutubeIcon /> },
];

export default function MediaPage() {
    return (
        <div className="font-sans items-center justify-items-center pb-20 gap-16">
            <Hero heading="Jose Alfonso Marquez" description="Photo & Video" tagline="Live music, trading card games and toys, on camera. Always up for something new." buttons={{
                primary: {
                    text: "Check It Out",
                    url: "#projects",
                },
                secondary: {
                    text: "Explore Dev Works",
                    url: "/",
                    target: "_blank",
                }
            }} />

            <section id="projects">
                <MediaProjects heading={"Photos"} description={"Live music."} categories={mediaCategories}></MediaProjects>
            </section>

            <section id="video" className="container flex flex-col items-center gap-6 px-8 py-16">
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

            <ContactSection socials={socials} />
        </div>
    );
}