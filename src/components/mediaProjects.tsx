import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface Feature {
    title: string
    description: string
    device: string
    image: string
}

interface Category {
    name: string
    value: string
    features: Feature[]
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
    // feature1 = {
    //     title: "UI/UX Design",
    //     description:
    //         "Creating intuitive user experiences with modern interface design principles and user-centered methodologies.",
    //     image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    // },
    // feature2 = {
    //     title: "Responsive Development",
    //     description:
    //         "Building websites that look and function perfectly across all devices and screen sizes.",
    //     image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    // },
    // feature3 = {
    //     title: "Brand Integration",
    //     description:
    //         "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    //     image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    // },
    // feature4 = {
    //     title: "Performance Optimization",
    //     description:
    //         "Ensuring fast loading times and smooth performance through optimized code and assets.",
    //     image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    // },
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
                                    {cat.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="relative overflow-hidden group rounded-md"
                                            aria-hidden="false"
                                        >
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="w-full h-full object-cover block transition-transform duration-700 ease-in-out group-hover:scale-110"
                                            />

                                            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center pointer-events-none group-hover:pointer-events-auto z-10">
                                                <p className="text-white text-lg font-semibold">{feature.title}</p>
                                                <p className="text-white text-lg">{feature.description}</p>
                                                <p className="text-white text-lg">{feature.device}</p>
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
