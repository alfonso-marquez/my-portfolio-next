import { DevProjects } from "@/components/devProjects";
import { Hero1 } from "@/components/hero";
import { Timeline } from "@/components/timeline";

export default function Home() {
    return (
        <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <Hero1 heading="Jose Alfonso Marquez" description="Software Engineer" image={{ src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", alt: "Hero section demo image showing interface components" }} />
            {/* Sections */}
            <section id="about" className=" flex items-center justify-center">
                {/* <h2 className="text-3xl font-semibold">About Section</h2> */}
                <Timeline heading={"About Me"} description={"I’m Alfonso Marquez, a full-stack developer with nearly 4 years of experience building scalable web applications using C#, Laravel, React, and AWS. Beyond development, I explore storytelling through photography and film, capturing moments with the same precision I bring to code. Big fan of The Maine and twenty one pilots."} buttons={{
                    primary: {
                        text: "View Projects",
                        url: "#projects"
                    },
                    secondary: {
                        text: "Let's Connect!",
                        url: "#contact"
                    }
                }} />
            </section>

            <section id="projects" className="">
                {/* <h2 className="text-3xl font-semibold">Projects Section</h2> */}
                <DevProjects heading={"Development Projects"}></DevProjects>
            </section>

            <section id="contact" className="h-100 items-center justify-center py-32 ">
                <h2 className="text-3xl font-semibold">Contact Section</h2>
                <p className="text-lg my-2">Reach out via email or social media.</p>
                <div>
                    <a className="hover:underline" href="mailto:marquez.josealfonso@gmail.com">marquez.josealfonso@gmail.com</a>
                </div>
            </section>
        </div>
    );
}
