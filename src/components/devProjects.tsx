interface Feature {
    title: string;
    description: string;
    image: string;
}

interface DevProjectsProps {
    heading: string;
    description?: string;
    feature1?: Feature;
    feature2?: Feature;
    feature3?: Feature;
    feature4?: Feature;
}

const DevProjects = ({
    heading = "Heading",
    description = "Development Projects. Work in Progress.",
    feature1 = {
        title: "My Portfolio",
        description:
            "Work in Progress. This is my personal portfolio website showcasing my projects and skills.",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    feature2 = {
        title: "Project 1",
        description:
            "Work in Progress",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    feature3 = {
        title: "Project 2",
        description:
            "Work in Progress",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
    feature4 = {
        title: "Project 3",
        description:
            "Work in Progress",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
}: DevProjectsProps) => {
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
            <div className="relative flex justify-center">
                <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
                    <div className="relative flex flex-col lg:flex-row">
                        <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                            <h2 className="text-xl font-semibold">{feature1.title}</h2>
                            <p className="text-muted-foreground">{feature1.description}</p>
                            <img
                                src={feature1.image}
                                alt={feature1.title}
                                className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                            />
                        </div>
                        <div className="flex flex-col justify-between p-10 lg:w-2/5">
                            <h2 className="text-xl font-semibold">{feature2.title}</h2>
                            <p className="text-muted-foreground">{feature2.description}</p>
                            <img
                                src={feature2.image}
                                alt={feature2.title}
                                className="mt-8 aspect-[1.45] h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
                        <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                            <h2 className="text-xl font-semibold">{feature3.title}</h2>
                            <p className="text-muted-foreground">{feature3.description}</p>
                            <img
                                src={feature3.image}
                                alt={feature3.title}
                                className="mt-8 aspect-[1.45] h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between p-10 lg:w-3/5">
                            <h2 className="text-xl font-semibold">{feature4.title}</h2>
                            <p className="text-muted-foreground">{feature4.description}</p>
                            <img
                                src={feature4.image}
                                alt={feature4.title}
                                className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { DevProjects };
