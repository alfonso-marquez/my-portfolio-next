'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CurrentlyData {
    learning: {
        title: string;
        platform: string;
        progress: number; // 0-100
    };
    playing: {
        title: string;
        platform: string;
        hoursPlayed?: number;
    };
    backlogs: {
        courses: number;
        games: number;
    };
}

interface CurrentlySectionProps {
    data?: CurrentlyData;
}

export function CurrentlySection({ data }: CurrentlySectionProps) {
    const [clicked, setClicked] = useState(false);
    const [clickCount, setClickCount] = useState(0);

    const defaultData: CurrentlyData = {
        learning: {
            title: "The Complete 2024 Full-Stack Web Development Bootcamp",
            platform: "Udemy",
            progress: 34,
        },
        playing: {
            title: "Final Fantasy Rebirth",
            platform: "PS5",
            hoursPlayed: 2,
        },
        backlogs: {
            courses: 6,
            games: 7,
        },
    };

    const currentData = data || defaultData;

    const handleAccountabilityClick = () => {
        if (clickCount >= 5) return; // Max 5 clicks

        setClicked(true);
        setClickCount(prev => prev + 1);

        // Reset after 3 seconds
        setTimeout(() => setClicked(false), 3000);
    };

    return (
        <div className="w-full rounded-lg border bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 dark:from-primary/20 dark:via-secondary/20 dark:to-accent/20 p-6 text-foreground shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold">What I&apos;m Up To</h2>

            {/* Currently Learning */}
            <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                    <span className="text-lg">📚</span>
                    <h3 className="text-lg font-medium">Currently Learning</h3>
                </div>
                <div className="ml-7 space-y-2">
                    <p className="text-base font-medium">{currentData.learning.title}</p>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline">{currentData.learning.platform}</Badge>
                        <span className="text-sm text-muted-foreground">
                            {currentData.learning.progress}% complete
                        </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                            className="h-full bg-primary transition-all"
                            style={{ width: `${currentData.learning.progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Currently Playing */}
            <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                    <span className="text-lg">🎮</span>
                    <h3 className="text-lg font-medium">Currently Playing</h3>
                </div>
                <div className="ml-7 space-y-2">
                    <p className="text-base font-medium">{currentData.playing.title}</p>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline">{currentData.playing.platform}</Badge>
                        {currentData.playing.hoursPlayed && (
                            <span className="text-sm text-muted-foreground">
                                {currentData.playing.hoursPlayed}h played
                            </span>
                        )}
                    </div>
                </div>
            </div>

            {/* Backlog Accountability */}
            <div className="rounded-lg border border-dashed bg-muted/50 p-4">
                <div className="mb-3 flex items-center gap-2">
                    <span className="text-lg">⚠️</span>
                    <h3 className="text-lg font-medium">Accountability Corner</h3>
                </div>
                <div className="ml-0 md:ml-7 space-y-3">
                    <p className="text-sm text-muted-foreground">
                        I have a bad habit of buying new courses and games before finishing the old ones.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">
                            {currentData.backlogs.courses} unfinished courses
                        </Badge>
                        <Badge variant="secondary">
                            {currentData.backlogs.games} games in backlog
                        </Badge>
                    </div>
                    <Button
                        onClick={handleAccountabilityClick}
                        variant={clicked ? "default" : "outline"}
                        className="w-full sm:w-auto"
                        disabled={clickCount >= 5}
                    >
                        {clickCount >= 5
                            ? "🎉 Max reminders reached!"
                            : clicked
                                ? `✅ Thanks! (${clickCount}/5)`
                                : "🚫 Remind me to finish these first!"}
                    </Button>
                    {clicked && clickCount < 5 && (
                        <p className="text-sm italic text-muted-foreground animate-in fade-in">
                            Challenge accepted. Now go finish what you started! 💪
                        </p>
                    )}
                    {clickCount >= 5 && (
                        <>
                            <p className="text-sm font-medium text-muted-foreground animate-in fade-in">
                                Fine! You can stop now. Thank you for your commitment! 🫡
                            </p>
                            <p className="text-sm font-medium text-muted-foreground animate-in fade-in">Implementation under development. 🚧</p>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}
