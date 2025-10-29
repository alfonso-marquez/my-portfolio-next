import { DevProjects } from "@/components/devProjects";
import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import { CurrentlySection } from "@/components/currentlySection";
import { currentlyData } from "@/lib/data";
import GithubIcon from "@/components/icons/githubIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";
import YoutubeIcon from "@/components/icons/youtubeIcon";

export default function Home() {
    return (
        <div className="font-sans items-center justify-items-center pb-20 gap-16">
            <Hero heading="Jose Alfonso Marquez" description="Software Engineer" />
            <section id="about" className="w-full bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 dark:from-primary/16 dark:via-secondary/16 dark:to-accent/10 px-8">
                <div className="flex items-center justify-center">
                    <Timeline heading={"About Me"} buttons={{
                        primary: {
                            text: "View Projects",
                            url: "#projects"
                        },
                        secondary: {
                            text: "Let's Connect!",
                            url: "#contact"
                        }
                    }} />
                </div>
                <div className="container relative mx-auto max-w-4xl px-4 pb-32">
                    <CurrentlySection data={currentlyData} />
                </div>
            </section>
            <section id="projects">
                <DevProjects heading={"Development Projects"}></DevProjects>
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
        </div >
    );
}
