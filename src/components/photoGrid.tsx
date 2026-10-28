import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"

export interface GridPhoto {
    image: string
    alt: string
    ratio?: number // width / height, read from the file at build time (see lib/photoRatios); a different
                   // ratio than the file's crops the photo to fit (centred)
    full?: boolean // takes a full-width row by itself
    href?: string // tile links to a page instead of calling onOpen
    label?: ReactNode // optional overlay, positioned against the photo frame
}

// How wide a row should be, counted in square photos, for phones / tablets / desktop
// (Tailwind md / lg breakpoints). Smaller numbers mean fewer, bigger photos per row.
type RowWidths = [phone: number, tablet: number, desktop: number]

// Each layout is rendered up front and shown by CSS breakpoint. Picking one in JS after load
// swapped the rows, which replaced the <img> elements and cancelled their downloads mid-way.
// Hidden layouts cost nothing to load: browsers skip lazy images that are display: none.
const breakpoints = ["flex md:hidden", "hidden md:flex lg:hidden", "hidden lg:flex"]

// Splits photos, in order, into `count` rows whose summed ratios are as even as possible,
// so every row (the last one included) lands at a similar height. With `avoidSingles`, a
// row holding just one photo is heavily penalised: alone it spans the page and gets upscaled.
const partition = (ratios: number[], count: number, avoidSingles = false): number[][] => {
    const n = ratios.length
    const target = ratios.reduce((a, b) => a + b, 0) / count
    const sum = (from: number, to: number) => ratios.slice(from, to).reduce((a, b) => a + b, 0)
    // cost[k][i]: best cost for the first i photos in k rows; cut[k][i]: where row k starts
    const cost = Array.from({ length: count + 1 }, () => Array(n + 1).fill(Infinity))
    const cut = Array.from({ length: count + 1 }, () => Array(n + 1).fill(0))
    cost[0][0] = 0
    for (let k = 1; k <= count; k++)
        for (let i = k; i <= n; i++)
            for (let j = k - 1; j < i; j++) {
                const c = cost[k - 1][j] + (sum(j, i) - target) ** 2 + (avoidSingles && i - j === 1 ? 100 : 0)
                if (c < cost[k][i]) [cost[k][i], cut[k][i]] = [c, j]
            }
    const rows: number[][] = []
    for (let k = count, i = n; k > 0; i = cut[k][i], k--)
        rows.unshift(Array.from({ length: i - cut[k][i] }, (_, x) => cut[k][i] + x))
    return rows
}

// Groups photo indexes into rows for one row width
const layoutRows = (photos: GridPhoto[], ratios: number[], rowWidth: number): number[][] => {
    // Full-width photos take a row of their own; the runs of photos between them are
    // balanced into rows separately
    // On tablets and desktop, keep at least two photos per row (phones can show one per row)
    const avoidSingles = rowWidth >= 2
    const rows: number[][] = []
    let run: number[] = []
    const runTotal = () => run.reduce((a, i) => a + ratios[i], 0)
    const flush = () => {
        if (!run.length) return
        const maxRows = avoidSingles ? Math.max(1, Math.floor(run.length / 2)) : run.length
        const count = Math.min(maxRows, Math.max(1, Math.round(runTotal() / rowWidth)))
        rows.push(...partition(run.map((i) => ratios[i]), count, avoidSingles).map((row) => row.map((x) => run[x])))
        run = []
    }
    photos.forEach((photo, i) => {
        // Only when the photos before it can fill a row; a lone photo left in front of a
        // full-width one would stretch huge, so the full one shares their row instead
        if (photo.full && (!run.length || runTotal() >= rowWidth * 0.6)) {
            flush()
            rows.push([i])
        } else run.push(i)
    })
    flush()
    return rows
}

// Justified grid: each row spans the full width and its photos share one height, so the whole
// block is a clean rectangle and wide photos get more room than tall ones
const PhotoGrid = ({ photos, onOpen, rowWidths = [2, 3, 4] }: {
    photos: GridPhoto[]
    onOpen?: (index: number) => void
    rowWidths?: RowWidths
}) => {
    if (!photos.length) return null
    const ratios = photos.map((p) => p.ratio ?? 1)

    return rowWidths.map((rowWidth, layout) => (
        <div key={layout} className={`${breakpoints[layout]} flex-col gap-3 lg:gap-6`}>
            {layoutRows(photos, ratios, rowWidth).map((row) => {
                const rowTotal = row.reduce((a, i) => a + ratios[i], 0)
                return (
                    <div key={row[0]} className="flex items-start gap-3 lg:gap-6">
                        {row.map((i) => {
                            const photo = photos[i]
                            // Width share of the row = ratio share, which keeps heights equal
                            // (normalised, since grow values summing below 1 would leave the row short)
                            const style = { flex: `${ratios[i] / rowTotal} 1 0%` }
                            // Photo zooms inside its frame on hover; the label sits on top of it
                            const content = (
                                <span className="relative block overflow-hidden">
                                    <Image
                                        src={photo.image}
                                        alt={photo.alt}
                                        style={{ aspectRatio: ratios[i] }}
                                        className="block w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                                        width={Math.round(ratios[i] * 1000)}
                                        height={1000}
                                        sizes={`${Math.ceil((ratios[i] / rowTotal) * 100)}vw`}
                                    />
                                    {photo.label}
                                </span>
                            )
                            if (photo.href) {
                                const external = photo.href.startsWith("http")
                                return (
                                    <Link
                                        key={photo.image}
                                        href={photo.href}
                                        style={style}
                                        className="group block min-w-0"
                                        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                    >
                                        {content}
                                    </Link>
                                )
                            }
                            return (
                                <button
                                    key={photo.image}
                                    type="button"
                                    onClick={() => onOpen?.(i)}
                                    style={style}
                                    className="group block min-w-0 cursor-zoom-in text-left"
                                    aria-label={`Open ${photo.alt}`}
                                >
                                    {content}
                                </button>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    ))
}

export { PhotoGrid }
