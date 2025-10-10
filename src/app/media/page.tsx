import { DevProjects } from "@/components/devProjects";
import { Hero1 } from "@/components/hero";
import GithubIcon from "@/components/icons/githubIcon";
import InstagramIcon from "@/components/icons/instagramIcon";
import LinkedinIcon from "@/components/icons/linkedinIcon";
import YoutubeIcon from "@/components/icons/youtubeIcon";
import { MediaProjects } from "@/components/mediaProjects";
import { Timeline } from "@/components/timeline";
import { mediaCategories } from "@/lib/data";


export default function MediaPage() {
    return (
        <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <Hero1 heading="Jose Alfonso Marquez" description="Photographer / Videographer" buttons={{
                primary: {
                    text: "Explore Media Works",
                    url: "#about",
                },
                secondary: {
                    text: "Explore Dev Works",
                    url: "/",
                    target: "_blank",
                }
            }} image={{ src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", alt: "Hero section demo image showing interface components" }} />
            {/* Sections */}
            <section id="about" className=" flex items-center justify-center">
                {/* <h2 className="text-3xl font-semibold">About Section</h2> */}
                <Timeline heading={"About Me"} description={"I’m Alfonso Marquez, aspiring creative. Blahh blahh blah insert stuff here"} features={[
                    {
                        image: "images/hongkongstreets.png",
                        title: "Photographer / Videographer",
                        description: "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the Purpose of Life. - Secret Life of Walter Mitty",
                    },
                    {
                        image: "images/soloarmy.JPEG",
                        title: "Enlisted Personnel",
                        description: "Special enlist (Software Developer) who served in the Philippine Army. ",
                    },
                    {
                        image: "images/quezon.png",
                        title: "Software Engineer",
                        description:
                            "Full-Stack Developer with nearly 4 years of experience building scalable web applications using C#, Laravel, React, and AWS.",
                    },
                ]} />
            </section>


            <section id="projects" className="">
                {/* <h2 className="text-3xl font-semibold">Projects Section</h2> */}
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