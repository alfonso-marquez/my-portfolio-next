import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface Image {
    title: string
    description: string
    device: string
    image: string
}

interface Category {
    name: string
    value: string
    images: Image[]
}

interface MediaProjectsProps {
    heading: string
    description?: string
    categories: Category[]
}

const MediaProjects = ({
    heading = "Photos taken by me",
    description = "Some of my favorite photos taken by me.",
    categories = [],
}: MediaProjectsProps) => {
    return (
        <div className="container py-32">
            <div className="mb-24 flex flex-col items-center gap-6">
                <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
                    {heading}
                </h1>
                <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
                    {description}
                </p>
            </div>

            {categories.length > 0 && (
                <Tabs defaultValue={categories[0].value}>
                    {/* Tabs header */}
                    <TabsList>
                        {categories.map((cat) => (
                            <TabsTrigger key={cat.value} value={cat.value}>
                                {cat.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {/* Tabs content */}
                    {categories.map((cat) => (
                        <TabsContent key={cat.value} value={cat.value}>
                            <div className="flex justify-center mt-6">
                                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
                                    {cat.images.map((image, i) => (
                                        <div
                                            key={i}
                                            className="relative overflow-hidden group rounded-md"
                                            aria-hidden="false"
                                        >
                                            <img
                                                src={image.image}
                                                alt={image.title}
                                                className="w-full h-full object-cover block transition-transform duration-700 ease-in-out group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center pointer-events-none group-hover:pointer-events-auto z-10">
                                                <p className="text-white text-lg font-semibold">{image.title}</p>
                                                <p className="text-white text-lg">{image.description}</p>
                                                <p className="text-white text-sm mt-2">{image.device}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TabsContent>
                    ))}

                </Tabs>
            )}
        </div>
    );
};

export { MediaProjects };
