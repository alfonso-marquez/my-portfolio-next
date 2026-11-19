import { Badge } from "@/components/ui/badge";
import { devProjects as defaultDevProjects, type DevProject } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FadeImage } from "@/components/fadeImage";

interface DevProjectsProps {
    badge?: string; // Small status pill above the heading, e.g. "Work in progress"
    heading: string;
    description?: string;
    projects?: DevProject[];
}

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const statusMeta: Record<DevProject["status"], { label: string; variant: BadgeVariant }> = {
    deployed: { label: "Live", variant: "default" },
    development: { label: "In Development", variant: "secondary" },
    planned: { label: "Planned", variant: "outline" },
    archived: { label: "Archived", variant: "destructive" },
};

// "Live" only makes sense with somewhere to go: it links to the site, and is
// hidden when there's no site URL. Other statuses are plain, unlinked labels.
const StatusBadge = ({ project }: { project: DevProject }) => {
    const { label, variant } = statusMeta[project.status];

    if (project.status === "deployed") {
        if (!project.siteUrl) return null;
        return (
            <Badge asChild variant={variant}>
                <a href={project.siteUrl} target="_blank" rel="noreferrer noopener">
                    {label}
                </a>
            </Badge>
        );
    }

    return <Badge variant={variant}>{label}</Badge>;
};

type CardWidth = "wide" | "narrow" | "full";

const widthClass: Record<CardWidth, string> = {
    wide: "lg:w-3/5",
    narrow: "lg:w-2/5",
    full: "lg:w-full",
};

const imageSizes: Record<CardWidth, string> = {
    narrow: "(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 500px",
    wide: "(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 800px",
    full: "(max-width: 1024px) 100vw, 1200px",
};

const ProjectCard = ({ project, width, divider }: { project: DevProject; width: CardWidth; divider: boolean }) => (
    <div
        className={cn(
            "flex flex-col justify-between p-10",
            widthClass[width],
            divider && "border-muted2 border-b border-solid lg:border-r lg:border-b-0",
        )}
    >
        <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <StatusBadge project={project} />
        </div>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.tech?.map((t) => (
                <Badge key={t} variant="outline">
                    {t}
                </Badge>
            ))}
        </div>
        <div className="mt-8 flex flex-col gap-4">
            {[project.image, project.secondImage].filter((src): src is string => !!src).map((src, i) => (
                <div
                    key={src}
                    className={cn(
                        "relative w-full",
                        width === "narrow" ? "aspect-[1.45]" : "aspect-[1.5] lg:aspect-[2.4]",
                    )}
                >
                    <FadeImage
                        src={src}
                        alt={i === 0 ? project.title : `${project.title}, second screenshot`}
                        fill
                        sizes={imageSizes[width]}
                        // Screenshots: keep the top of the page (nav, headline) in frame.
                        className="object-cover object-top"
                    />
                </div>
            ))}
        </div>
    </div>
);

const DevProjects = ({
    badge,
    heading = "Heading",
    description = "Most recent projects.",
    projects = defaultDevProjects,
}: DevProjectsProps) => {
    // Pair projects into rows that alternate wide/narrow; an odd one out spans the full row.
    const rows: DevProject[][] = [];
    for (let i = 0; i < projects.length; i += 2) rows.push(projects.slice(i, i + 2));

    return (
        <div className="container py-32">
            <div className="mb-24 flex flex-col items-center gap-6">
                {badge && (
                    <Badge variant="outline" className="-mb-2">{badge}</Badge>
                )}
                <h1 className="text-center text-3xl font-semibold tracking-tight lg:text-5xl lg:max-w-3xl">
                    {heading}
                </h1>
                <p className="text-center text-lg leading-relaxed text-muted-foreground lg:text-xl md:max-w-2xl">
                    {description}
                </p>
            </div>
            <div className="relative flex justify-center">
                <div className="border-muted2 relative flex w-full flex-col border md:w-2/3 lg:w-full">
                    {rows.map((row, rowIndex) => {
                        const widths: CardWidth[] =
                            row.length === 1
                                ? ["full"]
                                : rowIndex % 2 === 0
                                  ? ["wide", "narrow"]
                                  : ["narrow", "wide"];
                        return (
                            <div
                                key={row[0].title}
                                className={cn(
                                    "relative flex flex-col lg:flex-row",
                                    rowIndex > 0 && "border-muted2 border-t border-solid",
                                )}
                            >
                                {row.map((project, i) => (
                                    <ProjectCard
                                        key={project.title}
                                        project={project}
                                        width={widths[i]}
                                        divider={i < row.length - 1}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { DevProjects };
