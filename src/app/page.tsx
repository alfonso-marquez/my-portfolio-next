import { DevProjects } from "@/components/devProjects";
import { Hero } from "@/components/hero";
import { Timeline } from "@/components/timeline";
import GithubIcon from "@/components/icons/githubIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";
import YoutubeIcon from "@/components/icons/youtubeIcon";
import { ContactSection } from "@/components/contactSection";

const socials = [
    { href: "https://github.com/alfonso-marquez", label: "GitHub", icon: <GithubIcon /> },
    { href: "https://linkedin.com/in/fonsomarquez/", label: "LinkedIn", icon: <LinkedinIcon /> },
    { href: "https://www.instagram.com/alfonsomrqz/", label: "Instagram", icon: <InstagramIcon /> },
    { href: "https://www.youtube.com/@alfonsomarquez2077", label: "YouTube", icon: <YoutubeIcon /> },
];

export default function Home() {
    return (
        <div className="font-sans items-center justify-items-center pb-20 gap-16">
            <Hero heading="Jose Alfonso Marquez" description="Software Engineer" />
            <section id="about" className="w-full bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 px-8">
                <div className="flex items-center justify-center">
                    <Timeline badge="Work in progress" heading={"About Me"} buttons={{
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
            </section>
            <section id="projects">
                <DevProjects badge="Work in progress" heading={"Development Projects"}></DevProjects>
            </section>

            <ContactSection socials={socials} />
        </div >
    );
}
