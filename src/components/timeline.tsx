'use client';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface TimelineProps {
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
        modalVideo?: string; // Optional video to open in dialog
    }>;
}

const initialDescription = "Hi, I am Alfonso Marquez, a full-stack developer passionate about building scalable and meaningful web applications. I focus on crafting clean, maintainable code and seamless user experiences that bring ideas to life.";


const Timeline = ({
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
            image: "/images/quezon.png",
            title: "Software Engineer",
            description:
                "Full-Stack Developer with nearly 4 years of experience building scalable web applications using C#, Laravel, React, and AWS.",
            sidebarDescription: initialDescription
        },
        {
            image: "/images/soloarmy.JPEG",
            title: "Enlisted Personnel",
            description: "Contributed to the modernization of military systems through software solutions.",
            sidebarDescription: "Served as a Special Enlist (Software Developer) in the Philippine Army.",
            modalVideo: "/videos/army-clips-2.mp4",
        },
        {
            image: "/images/hongkongstreets.png",
            title: "Photographer / Videographer",
            description: "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the Purpose of Life. - Secret Life of Walter Mitty",
            sidebarDescription: "An aspiring creative photographer and videographer who loves to capture moments and tell stories through visual media."
        },
    ],
}: TimelineProps) => {
    const [activeDescription, setActiveDescription] = useState(
        stages.length > 0 && stages[0].sidebarDescription
            ? stages[0].sidebarDescription
            : description
    );
    const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
    // Removed hover video playback

    // Dialog state for playing a clip
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogVideoSrc, setDialogVideoSrc] = useState<string | null>(null);
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const dialogVideoRef = useRef<HTMLVideoElement | null>(null);

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
                    <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
                        {heading}
                    </h2>
                    <p className="font-medium text-muted-foreground md:text-xl transition-all duration-1000 ease-in-out">
                        {activeDescription}
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
                                    priority={false}
                                />

                                {stage.modalVideo && (
                                    <div className="pointer-events-none absolute inset-0 flex items-end justify-end p-3">
                                        <Button
                                            size="sm"
                                            className="cursor-pointer pointer-events-auto z-10 bg-black/60 text-white hover:bg-black/90"
                                            onClick={() => {
                                                setDialogVideoSrc(stage.modalVideo!);
                                                setDialogTitle(stage.title);
                                                setDialogOpen(true);
                                            }}
                                        >
                                            A day in the life...
                                        </Button>
                                    </div>
                                )}
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
            {/* Video Dialog */}
            <Dialog open={dialogOpen} onOpenChange={(open) => {
                setDialogOpen(open);
                if (!open && dialogVideoRef.current) {
                    dialogVideoRef.current.pause();
                    dialogVideoRef.current.currentTime = 0;
                }
            }}>
                <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                        <DialogTitle>A Day in the Life of an {dialogTitle}</DialogTitle>
                    </DialogHeader>
                    {dialogVideoSrc && (
                        <video
                            ref={dialogVideoRef}
                            src={dialogVideoSrc}
                            className="mt-2 w-full rounded-md"
                            autoPlay
                            playsInline
                            preload="metadata"
                            loop
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export { Timeline };
