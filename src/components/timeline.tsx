import { Button } from "@/components/ui/button";

interface Stage {
    image: string;
    title: string;
    description: string;
}

interface TimelineProps {
    heading: string;
    description: string;
    buttons?: {
        primary: {
            text: string;
            url: string;
        };
        secondary: {
            text: string;
            url: string;
        };
    };
    stages?: Stage[];
}

const Timeline = ({
    heading = "Experience the difference with us",
    description = "We believe in creating lasting partnerships with our clients, focusing on long-term success through collaborative innovation and dedicated support.",
    buttons = {
        primary: {
            text: "See My Work",
            url: "#projects"
        },
        secondary: {
            text: "Let's Connect!",
            url: "#contact"
        },
    },
    stages = [
        {
            image: "images/quezon.png",
            title: "Software Engineer",
            description:
                "Full-Stack Developer with nearly 4 years of experience building scalable web applications using C#, Laravel, React, and AWS.",
        },
        {
            image: "images/soloarmy.JPEG",
            title: "Enlisted Personnel",
            description: "Special enlist (Software Developer) who served in the Philippine Army. ",
        },
        {
            image: "images/hongkongstreets.png",
            title: "Photographer / Videographer",
            description: "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the Purpose of Life. - Secret Life of Walter Mitty",
        },
    ],
}: TimelineProps) => {
    return (
        <div className="container max-w-6xl py-32">
            <div className="relative grid gap-16 md:grid-cols-2">
                <div className="top-40 h-fit md:sticky">
                    <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
                        {heading}
                    </h2>
                    <p className="font-medium text-muted-foreground md:text-xl" >
                        {description}
                    </p>
                    <div className="mt-8 flex flex-col gap-4 lg:flex-row">
                        <Button className="gap-2" size="lg" asChild>
                            <a href={buttons.primary.url}>{buttons.primary.text}</a>
                        </Button>
                        <Button variant="outline" size="lg" className="gap-2" asChild>
                            <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-12 md:gap-20">
                    {stages.map((stage, index) => (
                        <div key={index} className="rounded-xl border p-2">
                            <img
                                src={stage.image}
                                alt={stage.title}
                                className="aspect-square w-full rounded-xl border border-dashed object-cover"
                            />
                            <div className="p-6">
                                <h3 className="mb-1 text-2xl font-semibold">
                                    {stage.title}
                                </h3>
                                <p className="text-muted-foreground">{stage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { Timeline };
