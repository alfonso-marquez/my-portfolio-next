import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/icons/githubIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";
import TiktokIcon from "@/components/icons/tiktokIcon";
import YoutubeIcon from "@/components/icons/youtubeIcon";
import { MediaProjects } from "@/components/mediaProjects";
import { mediaCategories } from "@/lib/data";


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
                <h2 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">Videos</h2>
                <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
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

            <section id="contact" className="h-100 flex flex-col items-center justify-center text-center py-32 px-4">
                <h2 className="text-3xl font-semibold">Contact Section</h2>
                <p className="text-lg my-2">Reach out via email or social media.</p>
                <div>
                    <a className="text-lg hover:underline" href="mailto:marquez.josealfonso@gmail.com">marquez.josealfonso@gmail.com</a>
                </div>
                <div className="my-4 flex gap-2">
                    <a href="https://github.com/alfonso-marquez" target="_blank"><GithubIcon /></a>
                    <a href="https://linkedin.com/in/fonsomarquez/" target="_blank"><LinkedinIcon /></a>
                    <a href="https://www.instagram.com/alfonsomrqz/" target="_blank"><InstagramIcon /></a>
                    <a href="https://www.youtube.com/channel/UCI7rCtpVLhc9ZP2sKjSPlSA" target="_blank"><YoutubeIcon /></a>
                </div>
            </section>
        </div>
    );
}