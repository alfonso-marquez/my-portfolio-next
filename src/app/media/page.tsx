import { CurrentlySection } from "@/components/currentlySection";
import { Hero } from "@/components/hero";
import GithubIcon from "@/components/icons/githubIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";
import YoutubeIcon from "@/components/icons/youtubeIcon";
import { MediaProjects } from "@/components/mediaProjects";
import { Timeline } from "@/components/timeline";
import { currentlyData, mediaCategories } from "@/lib/data";


export default function MediaPage() {
    const description = "Hi, I am Alfonso Marquez, an aspiring creative exploring photography and film as ways to express myself. I'm especially interested in music, street, and animal photography. Help me find my art style!";

    const mediaStages = [
        {
            image: "/images/hkphoto2.JPEG",
            title: "Photographer / Videographer",
            description: "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the Purpose of Life. - Secret Life of Walter Mitty",
            sidebarDescription: description
        },
        {
            image: "/images/armysection3.JPEG",
            title: "Enlisted Personnel",
            description: "Designed and created information websites and also a part of a creatives team producing our class graduation videos.",
            sidebarDescription: "Served as a Special Enlist (Software Developer) in the Philippine Army.",
            modalVideo: "/videos/army-clips-2.mp4"
        },
        {
            image: "/images/quezon.png",
            title: "Software Engineer",
            description: "Full-stack developer with 4 years of experience crafting scalable and visually engaging web experiences with C#, Laravel, React, and AWS.",
            sidebarDescription: "A creative developer passionate about blending design and code to create meaningful digital experiences."
        },
    ]

    return (
        <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <Hero heading="Jose Alfonso Marquez" description="Photographer / Videographer" buttons={{
                primary: {
                    text: "Explore Media Works",
                    url: "#about",
                },
                secondary: {
                    text: "Explore Dev Works",
                    url: "/",
                    target: "_blank",
                }
            }} />

            <section id="about" className="w-full bg-gradient-to-br from-primary/8 via-secondary/8 to-accent/8 dark:from-primary/16 dark:via-secondary/16 dark:to-accent/10 px-8">
                <div className="flex items-center justify-center">
                    <Timeline heading={"About Me"} description={description} stages={mediaStages} />
                </div>
                <div className="container relative mx-auto max-w-4xl px-4 pb-32">
                    <CurrentlySection data={currentlyData} />
                </div>
            </section>

            <section id="projects" className="">
                <MediaProjects heading={"Photography"} categories={mediaCategories}></MediaProjects>
            </section>

            <section id="contact" className="h-100 items-center justify-center py-32 ">
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