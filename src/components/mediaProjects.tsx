import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

interface ImageType {
    description: string
    device: string
    image: string
    wide?: boolean // spans both columns on desktop
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
    images?: ImageType[]
    sets?: PhotoSet[]
}

interface MediaProjectsProps {
    heading: string
    description?: string
    categories: Category[]
}

const PhotoGrid = ({ images, label }: { images: ImageType[], label: string }) => (
    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        {images.map((image, i) => (
            <div
                key={image.image}
                className={`relative overflow-hidden group rounded-md ${image.wide ? "md:col-span-2" : ""}`}
                aria-hidden="false"
            >
                <Image
                    src={image.image}
                    alt={`${label}, photo ${i + 1}`}
                    className="w-full h-auto object-cover block transition-transform duration-700 ease-in-out group-hover:scale-110"
                    width={500}
                    height={500}
                    sizes={image.wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                    priority={false}
                />

                {(image.description || image.device) && (
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center pointer-events-none group-hover:pointer-events-auto z-10">
                        <p className="text-white text-md">{image.description}</p>
                        <p className="text-white text-sm mt-1">{image.device}</p>
                    </div>
                )}
            </div>
        ))}
    </div>
)

const MediaProjects = ({
    heading = "Photos taken by me",
    description = "Some of my favorite photos taken by me.",
    categories = [],
}: MediaProjectsProps) => {
    return (
        <div className="container py-16">
            <div className="mb-12 flex flex-col items-center gap-6 px-8">
                <h2 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
                    {heading}
                </h2>
                <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
                    {description}
                </p>
            </div>

            {categories.length > 0 && (
                <Tabs defaultValue={categories[0].value}>
                    {/* Tabs header, wraps onto a second row on small screens */}
                    <TabsList className="mx-4 h-auto flex-wrap">
                        {categories.map((cat) => (
                            <TabsTrigger key={cat.value} value={cat.value} className="flex-none">
                                {cat.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Tabs content */}
                    {categories.map((cat) => (
                        <TabsContent key={cat.value} value={cat.value} className="w-full">
                            <div className="mt-6 px-8">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-semibold">{cat.title}</h2>
                                    {(cat.date || cat.venue) && (
                                        <p className="text-muted-foreground">
                                            {[cat.date, cat.venue].filter(Boolean).join(" · ")}
                                        </p>
                                    )}
                                </div>
                                {cat.sets?.length ? (
                                    // Multi-act gigs: one section per artist
                                    cat.sets.map((set) => (
                                        <div key={set.name} className="mb-12">
                                            <h3 className="mb-3 text-xl font-semibold">{set.name}</h3>
                                            <PhotoGrid images={set.images} label={`${set.name} at ${cat.title}`} />
                                        </div>
                                    ))
                                ) : cat.images?.length ? (
                                    <PhotoGrid images={cat.images} label={cat.title} />
                                ) : (
                                    <p className="text-muted-foreground">Photos coming soon.</p>
                                )}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            )}
        </div>
    );
};

export { MediaProjects };
