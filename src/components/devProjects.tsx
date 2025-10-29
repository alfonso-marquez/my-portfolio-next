import { Badge } from "@/components/ui/badge";
import { devProjects as defaultDevProjects, type DevProject } from "@/lib/data";

interface DevProjectsProps {
    heading: string;
    description?: string;
    projects?: DevProject[];
}

const DevProjects = ({
    heading = "Heading",
    description = "Most recent projects.",
    projects = defaultDevProjects,
}: DevProjectsProps) => {
    const renderMeta = (item: DevProject) => (
        <div className="mt-4 flex flex-wrap items-center gap-2">
            {item.tech?.map((t) => (
                <Badge key={t} variant="outline">
                    {t}
                </Badge>
            ))}
            {item.darkMode && (
                <Badge variant="secondary">
                    <span
                        aria-hidden
                        className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-500"
                    />
                    Dark mode
                </Badge>
            )}
        </div>
    );
    const getBadgeMeta = (project: DevProject): { label: string; variant: "default" | "secondary" | "destructive" | "outline"; href?: string } => {
        const status = project.status ?? "development";
        const metaMap: Record<DevProject["status"], { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
            deployed: { label: "Live", variant: "default" },
            development: { label: "In Development", variant: "secondary" },
            planned: { label: "Planned", variant: "outline" },
            archived: { label: "Archived", variant: "destructive" },
        } as const;

        const { label, variant } = metaMap[status];
        const href = status === "deployed" && project.siteUrl
            ? project.siteUrl
            : project.repoUrl;

        return { label, variant, href };
    };

    const placeholder: DevProject = {
        title: "Coming soon",
        description: "Work in Progress",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
        status: "planned",
        repoUrl: "https://github.com/alfonso-marquez",
    };

    const [project1, project2, project3, project4] = [
        projects[0] ?? placeholder,
        projects[1] ?? placeholder,
        projects[2] ?? placeholder,
        projects[3] ?? placeholder,
    ];

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
                <div className="border-muted2 relative flex w-full flex-col border md:w-2/3 lg:w-full">
                    <div className="relative flex flex-col lg:flex-row">
                        <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-r lg:border-b-0">
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-semibold">{project1.title}</h2>
                                {(() => {
                                    const { label, variant, href } = getBadgeMeta(project1);
                                    return href ? (
                                        <Badge asChild variant={variant}>
                                            <a href={href} target="_blank" rel="noreferrer noopener">
                                                {label}
                                            </a>
                                        </Badge>
                                    ) : (
                                        <Badge variant={variant}>{label}</Badge>
                                    );
                                })()}
                            </div>
                            <p className="text-muted-foreground">{project1.description}</p>
                            {renderMeta(project1)}
                            <img
                                src={project1.image}
                                alt={project1.title}
                                className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                            />
                        </div>
                        <div className="flex flex-col justify-between p-10 lg:w-2/5">
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-semibold">{project2.title}</h2>
                                {(() => {
                                    const { label, variant, href } = getBadgeMeta(project2);
                                    return href ? (
                                        <Badge asChild variant={variant}>
                                            <a href={href} target="_blank" rel="noreferrer noopener">
                                                {label}
                                            </a>
                                        </Badge>
                                    ) : (
                                        <Badge variant={variant}>{label}</Badge>
                                    );
                                })()}
                            </div>
                            <p className="text-muted-foreground">{project2.description}</p>
                            {renderMeta(project2)}
                            <img
                                src={project2.image}
                                alt={project2.title}
                                className="mt-8 aspect-[1.45] h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
                        <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-r lg:border-b-0">
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-semibold">{project3.title}</h2>
                                {(() => {
                                    const { label, variant, href } = getBadgeMeta(project3);
                                    return href ? (
                                        <Badge asChild variant={variant}>
                                            <a href={href} target="_blank" rel="noreferrer noopener">
                                                {label}
                                            </a>
                                        </Badge>
                                    ) : (
                                        <Badge variant={variant}>{label}</Badge>
                                    );
                                })()}
                            </div>
                            <p className="text-muted-foreground">{project3.description}</p>
                            {renderMeta(project3)}
                            <img
                                src={project3.image}
                                alt={project3.title}
                                className="mt-8 aspect-[1.45] h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-between p-10 lg:w-3/5">
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl font-semibold">{project4.title}</h2>
                                {(() => {
                                    const { label, variant, href } = getBadgeMeta(project4);
                                    return href ? (
                                        <Badge asChild variant={variant}>
                                            <a href={href} target="_blank" rel="noreferrer noopener">
                                                {label}
                                            </a>
                                        </Badge>
                                    ) : (
                                        <Badge variant={variant}>{label}</Badge>
                                    );
                                })()}
                            </div>
                            <p className="text-muted-foreground">{project4.description}</p>
                            {renderMeta(project4)}
                            <img
                                src={project4.image}
                                alt={project4.title}
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
