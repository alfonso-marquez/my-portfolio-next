'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface TimelineProps {
    badge?: string; // Small status pill above the heading, e.g. "Work in progress"
    heading?: string;
    description?: string;
    buttons?: {
        primary: { text: string; url: string };
        secondary: { text: string; url: string };
    };
    stages?: Array<{
        image: string;
        title: string;
        description: string;
        sidebarDescription?: string; // Dynamic description for sticky sidebar
    }>;
}

const initialDescription = "Full-stack developer with 6+ years of experience building web applications, now focused on AI agents and automation.";


const Timeline = ({
    badge,
    heading = "About Me",
    description = initialDescription,
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
            image: "/images/about/software-engineer.jpg",
            title: "Software Engineer",
            description:
                "I build full-stack web applications with C#, Laravel, Node.js, React and AWS, and integrate OpenAI-powered agents and automated workflows into the tools teams already use.",
            sidebarDescription: initialDescription
        },
        {
            image: "/images/about/army.jpg",
            title: "Enlisted Personnel",
            description: "Contributed to the modernization of military systems through software solutions.",
            sidebarDescription: "Served as a Special Enlist (Software Developer) in the Philippine Army.",
        },
        {
            image: "/images/about/photographer.jpg",
            title: "Photographer / Videographer",
            description: "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the Purpose of Life. - Secret Life of Walter Mitty",
            sidebarDescription: "Lately, I’ve been capturing moments through photos and video, drawn by my love of live music, TCGs and tech."
        },
    ],
}: TimelineProps) => {
    const [activeDescription, setActiveDescription] = useState(
        stages.length > 0 && stages[0].sidebarDescription
            ? stages[0].sidebarDescription
            : description
    );
    const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers = stages.map((stage, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveDescription(stage.sidebarDescription || description);
                    }
                },
                {
                    threshold: 0.4,
                    rootMargin: "0px 0px -60% 0px"
                }
            );

            if (stageRefs.current[index]) {
                observer.observe(stageRefs.current[index]!);
            }

            return observer;
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [stages, description]);

    return (
        <div className="container max-w-6xl py-32">
            <div className="relative grid gap-16 md:grid-cols-2">
                <div className="top-40 h-fit md:sticky">
                    {badge && (
                        <Badge variant="outline" className="mb-2">{badge}</Badge>
                    )}
                    <h2 className="mt-4 mb-6 text-3xl font-semibold tracking-tight md:text-5xl">
                        {heading}
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground md:text-xl transition-all duration-1000 ease-in-out">
                        {activeDescription}
                    </p>
                    <div className="mt-8 flex flex-col gap-2 lg:flex-row px-8 md:px-0">
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
                        <div
                            key={index}
                            ref={(el) => { stageRefs.current[index] = el; }}
                            className="rounded-xl border p-2 bg-card shadow-sm"
                        >
                            <div className="relative aspect-square w-full rounded-xl border border-dashed overflow-hidden">
                                <Image
                                    src={stage.image}
                                    alt={stage.title}
                                    className="w-full h-full object-cover"
                                    fill
                                    // One column of a two-column max-w-6xl layout (~540px); without this
                                    // the browser assumes full screen width and fetches the 3840px version
                                    sizes="(min-width: 1152px) 540px, (min-width: 768px) 50vw, 100vw"
                                />
                            </div>
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
