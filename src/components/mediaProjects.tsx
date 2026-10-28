"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image"

interface ImageType {
    description: string
    device: string
    image: string
    wide?: boolean // not used by the masonry layout; kept until the review decides
}

interface PhotoSet {
    name: string
    images: ImageType[]
}

interface Category {
    name: string
    value: string
    title: string
    date?: string
    venue?: string
    note?: string // one line under the gig heading, e.g. a credit
    images?: ImageType[]
    sets?: PhotoSet[]
}

interface MediaProjectsProps {
    heading: string
    description?: string
    categories: Category[]
}

// A photo plus the context the lightbox shows under it
interface Photo extends ImageType {
    artist?: string
    gig: string
    date?: string
}

const photosOf = (cat: Category): Photo[] =>
    cat.sets?.length
        ? cat.sets.flatMap((set) => set.images.map((img) => ({ ...img, artist: set.name, gig: cat.title, date: cat.date })))
        : (cat.images ?? []).map((img) => ({ ...img, gig: cat.title, date: cat.date }))

// 2 columns on phones, 3 on tablets, 4 on desktop (Tailwind md / lg breakpoints)
const useColumnCount = () => {
    const [count, setCount] = useState(2)
    useEffect(() => {
        const lg = window.matchMedia("(min-width: 1024px)")
        const md = window.matchMedia("(min-width: 768px)")
        const update = () => setCount(lg.matches ? 4 : md.matches ? 3 : 2)
        update()
        lg.addEventListener("change", update)
        md.addEventListener("change", update)
        return () => {
            lg.removeEventListener("change", update)
            md.removeEventListener("change", update)
        }
    }, [])
    return count
}

// Masonry: photos keep their natural shape and are dealt left to right across the columns,
// so small sets still use every column (CSS columns would balance them into fewer)
const Masonry = ({ photos, onOpen }: { photos: Photo[], onOpen: (photo: Photo) => void }) => {
    const count = useColumnCount()
    const columns = Array.from({ length: count }, (_, c) => photos.filter((_, i) => i % count === c))

    return (
        <div className="flex items-start gap-3 lg:gap-6">
            {columns.map((column, c) => (
                <div key={c} className="flex min-w-0 flex-1 flex-col gap-3 lg:gap-6">
                    {column.map((photo) => {
                        const alt = `${photo.artist ?? photo.gig}, photo ${photos.indexOf(photo) + 1}`
                        return (
                            <button
                                key={photo.image}
                                type="button"
                                onClick={() => onOpen(photo)}
                                className="block w-full cursor-zoom-in"
                                aria-label={`Open ${alt}`}
                            >
                                <Image
                                    src={photo.image}
                                    alt={alt}
                                    className="block h-auto w-full transition-opacity duration-300 hover:opacity-85"
                                    width={500}
                                    height={500}
                                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                />
                            </button>
                        )
                    })}
                </div>
            ))}
        </div>
    )
}

const MediaProjects = ({
    heading = "Photos taken by me",
    description = "Some of my favorite photos taken by me.",
    categories = [],
}: MediaProjectsProps) => {
    // Lightbox steps through the photos of the gig that was clicked
    const [lightbox, setLightbox] = useState<{ photos: Photo[], index: number } | null>(null)

    const open = (cat: Category, photo: Photo) => {
        const photos = photosOf(cat)
        setLightbox({ photos, index: photos.findIndex((p) => p.image === photo.image) })
    }
    const step = (delta: number) =>
        setLightbox((lb) => lb && { ...lb, index: (lb.index + delta + lb.photos.length) % lb.photos.length })

    const current = lightbox ? lightbox.photos[lightbox.index] : null

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mb-12 flex flex-col items-center gap-6">
                <h2 className="text-center text-3xl font-semibold tracking-tight lg:text-5xl lg:max-w-3xl">
                    {heading}
                </h2>
                <p className="text-center text-lg leading-relaxed text-muted-foreground lg:text-xl md:max-w-2xl">
                    {description}
                </p>
            </div>

            {categories.length > 0 && (
                <Tabs defaultValue={categories[0].value} className="items-stretch">
                    {/* Gig switcher: plain text links, current one underlined */}
                    <TabsList className="mx-auto h-auto flex-wrap justify-center gap-x-6 gap-y-2 bg-transparent p-0">
                        {categories.map((cat) => (
                            <TabsTrigger
                                key={cat.value}
                                value={cat.value}
                                className="flex-none rounded-none border-0 px-0 text-sm font-normal text-zinc-500 hover:text-zinc-950 data-[state=active]:bg-transparent data-[state=active]:text-zinc-950 data-[state=active]:shadow-none data-[state=active]:underline underline-offset-[6px] decoration-1"
                            >
                                {cat.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {categories.map((cat) => {
                        const photos = photosOf(cat)
                        return (
                            <TabsContent key={cat.value} value={cat.value} className="mt-10 w-full">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-semibold tracking-tight lg:text-3xl">{cat.title}</h2>
                                    {(cat.date || cat.venue) && (
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {[cat.date, cat.venue].filter(Boolean).join(" · ")}
                                        </p>
                                    )}
                                    {cat.note && (
                                        <p className="mt-1 text-sm text-zinc-600">{cat.note}</p>
                                    )}
                                </div>
                                {cat.sets?.length ? (
                                    // Multi-act gigs: one labelled masonry block per artist
                                    cat.sets.map((set) => (
                                        <div key={set.name} className="mb-12">
                                            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">{set.name}</h3>
                                            <Masonry
                                                photos={photos.filter((p) => p.artist === set.name)}
                                                onOpen={(photo) => open(cat, photo)}
                                            />
                                        </div>
                                    ))
                                ) : photos.length ? (
                                    <Masonry photos={photos} onOpen={(photo) => open(cat, photo)} />
                                ) : (
                                    <p className="text-muted-foreground">Photos coming soon.</p>
                                )}
                            </TabsContent>
                        )
                    })}
                </Tabs>
            )}

            <Dialog open={!!lightbox} onOpenChange={(isOpen) => !isOpen && setLightbox(null)}>
                <DialogContent
                    className="max-w-[calc(100%-1rem)] gap-3 border-none p-3 shadow-none sm:max-w-[min(92vw,1100px)] sm:p-4"
                    onKeyDown={(e) => {
                        if (e.key === "ArrowLeft") step(-1)
                        if (e.key === "ArrowRight") step(1)
                    }}
                >
                    {current && lightbox && (
                        <>
                            <Image
                                key={current.image}
                                src={current.image}
                                alt={`${current.artist ?? current.gig}, photo ${lightbox.index + 1}`}
                                className="mx-auto h-auto max-h-[75vh] w-auto object-contain"
                                width={1600}
                                height={2000}
                                sizes="92vw"
                            />
                            <div className="flex items-end justify-between gap-4">
                                <div className="min-w-0">
                                    <DialogTitle className="text-sm font-medium">
                                        {[current.artist, current.gig].filter(Boolean).join(" · ")}
                                    </DialogTitle>
                                    <DialogDescription className="text-sm text-zinc-600">
                                        {[current.date, current.description, current.device].filter(Boolean).join(" · ")}
                                    </DialogDescription>
                                </div>
                                {lightbox.photos.length > 1 && (
                                    <div className="flex shrink-0 items-center gap-1 text-sm text-zinc-600">
                                        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="p-1 hover:text-zinc-950">
                                            <ChevronLeft className="size-5" />
                                        </button>
                                        <span className="tabular-nums">{lightbox.index + 1} / {lightbox.photos.length}</span>
                                        <button type="button" onClick={() => step(1)} aria-label="Next photo" className="p-1 hover:text-zinc-950">
                                            <ChevronRight className="size-5" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export { MediaProjects };
