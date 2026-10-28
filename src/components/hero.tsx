import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
    badge?: string;
    heading: string;
    description: string;
    tagline?: string;
    buttons?: {
        primary?: {
            text: string;
            url: string;
            target?: string;
        };
        secondary?: {
            text: string;
            url: string;
            target?: string;
        };
    };
}

const Hero = ({
    heading = "Blocks Built With Shadcn & Tailwind",
    description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
    tagline,
    buttons = {
        primary: {
            text: "Explore Dev Works",
            url: "#about",
        },
        secondary: {
            text: "Explore Media Works",
            url: "/media",
            target: "_blank",
        },
    },
}: HeroProps) => {
    return (
        <section className="w-full py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="mt-6 text-pretty text-5xl font-semibold leading-[1.05] tracking-tight lg:text-7xl">
                            {heading}
                        </h1>
                        <p className="text-muted-foreground mb-6 max-w-xl text-2xl sm:text-3xl lg:text-4xl" id="description-animate" >
                            {description}
                        </p>
                        {tagline && (
                            <p className="text-muted-foreground mb-6 max-w-xl text-base leading-relaxed sm:text-lg">
                                {tagline}
                            </p>
                        )}
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start px-16 md:px-0">
                            {buttons.primary && (
                                <Button asChild className="w-full sm:w-auto">
                                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                                </Button>
                            )}
                            {buttons.secondary && (
                                <Button asChild variant="outline" className="w-full sm:w-auto">
                                    <a href={buttons.secondary.url} target={buttons.secondary.target}>
                                        {buttons.secondary.text}
                                        <ArrowRight className="size-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero };
