import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SplineComponent from "./spline";

interface Hero1Props {
    badge?: string;
    heading: string;
    description: string;
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
    image: {
        src: string;
        alt: string;
    };
}

const Hero1 = ({
    heading = "Blocks Built With Shadcn & Tailwind",
    description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
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
    image = {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
        alt: "Hero section demo image showing interface components",
    },
}: Hero1Props) => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h1 className="mt-6 text-pretty text-4xl font-bold lg:text-6xl">
                            {heading}
                        </h1>
                        <p className="text-muted-foreground mb-6 max-w-xl text-2xl sm:text-3xl lg:text-4xl" id="description-animate" >
                            {description}
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
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
                    <div className="flex flex-col">
                        <SplineComponent></SplineComponent>
                    </div>
                    {/* <img
                        src={image.src}
                        alt={image.alt}
                        className="max-h-96 w-full rounded-md object-cover"
                    /> */}

                </div>
            </div>
        </section>
    );
};

export { Hero1 };
