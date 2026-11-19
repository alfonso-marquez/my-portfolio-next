"use client"

import Image, { type ImageProps } from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

// next/image that fades in once loaded, over a pulsing placeholder while it downloads.
// Images stay lazy-loaded (next/image's default unless `priority` is set).
// The placeholder is absolutely positioned, so the parent must be `relative`; pass
// `skeleton={false}` where there is no such parent or no box to fill (e.g. the lightbox).
const FadeImage = ({ className, onLoad, skeleton = true, alt, ...props }: ImageProps & { skeleton?: boolean }) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <>
            {skeleton && !loaded && (
                <span aria-hidden className="absolute inset-0 animate-pulse bg-muted motion-reduce:animate-none" />
            )}
            <Image
                {...props}
                alt={alt}
                // `fade-image` (globals.css) owns the transition so it can also carry hover zooms
                className={cn("fade-image", loaded ? "opacity-100" : "opacity-0", className)}
                onLoad={(e) => {
                    setLoaded(true)
                    onLoad?.(e)
                }}
            />
        </>
    )
}

export { FadeImage }
