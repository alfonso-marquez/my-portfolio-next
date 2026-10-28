import { PhotoGrid } from "@/components/photoGrid"

interface ProjectCover {
    slug: string
    title: string
    gig: string
    cover: string
    ratio?: number
}

// One cover photo per project, each linking to that project's page with all of its photos
const MediaProjects = ({ projects }: { projects: ProjectCover[] }) => (
    <div className="w-full px-4 pb-16 lg:px-8">
        {/* Large covers: one per row on phones, about three across on desktop */}
        <PhotoGrid
            rowWidths={[1, 2.5, 3]}
            photos={projects.map((project) => ({
                image: project.cover,
                ratio: project.ratio,
                href: `/media/${project.slug}`,
                alt: `${project.title}, ${project.gig}`,
                // Title over a dark fade at the bottom of the photo. Shown on hover or keyboard
                // focus where hover exists; always shown on touch screens
                label: (
                    <span key={project.slug} className="absolute inset-x-0 bottom-0 block bg-gradient-to-t from-black/75 via-black/35 to-transparent px-4 pb-4 pt-16 text-white transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:opacity-100 lg:px-5 lg:pb-5">
                        <span className="block text-base font-medium lg:text-lg">{project.title}</span>
                        <span className="block text-sm text-white/80">{project.gig}</span>
                    </span>
                ),
            }))}
        />
    </div>
)

export { MediaProjects }
