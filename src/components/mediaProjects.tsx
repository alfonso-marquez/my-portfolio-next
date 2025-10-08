import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface Feature {
    title: string
    description: string
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
                            <div className="relative flex justify-center">
                                <div className="relative grid w-full grid-cols-1 gap-5 md:grid-cols-2">
                                    {cat.features.map((feature, i) => (
                                        <div key={i} className="flex flex-col justify-between p-5">
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="aspect-auto object-cover"
                                            />
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
