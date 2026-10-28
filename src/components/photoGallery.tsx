"use client"

import { useRef, useState } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { ChevronLeft, ChevronRight, XIcon } from "lucide-react"
import Image from "next/image"
import { PhotoGrid } from "@/components/photoGrid"

interface GalleryPhoto {
    image: string
    ratio?: number
    full?: boolean
    description?: string
    device?: string
}

const overlayButton = "absolute p-2 text-zinc-950 opacity-70 transition-opacity hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-1 focus-visible:outline-zinc-950"

// All photos of one project in the justified grid; clicking one opens the lightbox
const PhotoGallery = ({ title, photos }: { title: string, photos: GalleryPhoto[] }) => {
    const [index, setIndex] = useState<number | null>(null)

    // Photo that opened the lightbox; focus goes back to it on close
    const opener = useRef<HTMLElement | null>(null)

    const open = (i: number) => {
        opener.current = document.activeElement as HTMLElement | null
        setIndex(i)
    }
    const step = (delta: number) =>
        setIndex((i) => i === null ? i : (i + delta + photos.length) % photos.length)

    const current = index === null ? null : photos[index]
    const altOf = (i: number) => `${title}, photo ${i + 1}`

    return (
        <>
            {/* Bigger photos than the /media covers: fewer per row */}
            <PhotoGrid photos={photos.map((p, i) => ({ ...p, alt: altOf(i) }))} onOpen={open} rowWidths={[1.5, 2, 2.5]} />

            {/* Lightbox: near-white full-screen overlay; Esc, the X or a click on the backdrop closes it */}
            <DialogPrimitive.Root open={index !== null} onOpenChange={(isOpen) => !isOpen && setIndex(null)}>
                <DialogPrimitive.Portal>
                    <DialogPrimitive.Content
                        className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 px-12 py-16 outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 sm:px-20"
                        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
                        onCloseAutoFocus={(e) => {
                            e.preventDefault()
                            opener.current?.focus()
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "ArrowLeft") step(-1)
                            if (e.key === "ArrowRight") step(1)
                        }}
                    >
                        {current && index !== null && (
                            <>
                                <DialogPrimitive.Title className="sr-only">{title}</DialogPrimitive.Title>
                                <DialogPrimitive.Description className="sr-only">
                                    {[`Photo ${index + 1} of ${photos.length}`, current.description, current.device].filter(Boolean).join(" · ")}
                                </DialogPrimitive.Description>
                                <Image
                                    key={current.image}
                                    src={current.image}
                                    alt={altOf(index)}
                                    className="h-auto max-h-full w-auto max-w-full object-contain"
                                    width={1600}
                                    height={2000}
                                    sizes="90vw"
                                />
                                {photos.length > 1 && (
                                    <>
                                        <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className={`${overlayButton} left-1 top-1/2 -translate-y-1/2 sm:left-6`}>
                                            <ChevronLeft className="size-8" strokeWidth={1} />
                                        </button>
                                        <button type="button" onClick={() => step(1)} aria-label="Next photo" className={`${overlayButton} right-1 top-1/2 -translate-y-1/2 sm:right-6`}>
                                            <ChevronRight className="size-8" strokeWidth={1} />
                                        </button>
                                    </>
                                )}
                                <DialogPrimitive.Close aria-label="Close" className={`${overlayButton} right-1 top-2 sm:right-6 sm:top-6`}>
                                    <XIcon className="size-7" strokeWidth={1} />
                                </DialogPrimitive.Close>
                            </>
                        )}
                    </DialogPrimitive.Content>
                </DialogPrimitive.Portal>
            </DialogPrimitive.Root>
        </>
    )
}

export { PhotoGallery }
