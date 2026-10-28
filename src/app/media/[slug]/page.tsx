import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PhotoGallery } from "@/components/photoGallery";
import { photoProjects } from "@/lib/data";
import { ratioOf } from "@/lib/photoRatios";

const visible = photoProjects.filter((project) => !project.hidden);

// Only the listed projects get pages; anything else is a 404
export const dynamicParams = false;

export const generateStaticParams = () => visible.map((project) => ({ slug: project.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = visible.find((p) => p.slug === slug);
    return project
        ? { title: `${project.title} — Alfonso Marquez`, description: `${project.title}, ${project.gig}. Photos by Alfonso Marquez.` }
        : {};
}

export default async function PhotoProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = visible.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <main className="w-full pt-28 pb-24 lg:pt-36">
            <div className="container mx-auto mb-12 px-4">
                <Link href="/media#projects" className="inline-flex items-center gap-1 text-sm text-zinc-500 underline-offset-4 hover:text-zinc-950 hover:underline">
                    <ArrowLeft className="size-4" />
                    All photos
                </Link>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight lg:text-5xl">{project.title}</h1>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground lg:text-xl">
                    {[project.gig, project.date, project.venue].filter(Boolean).join(" · ")}
                </p>
                {project.note && <p className="mt-1 text-sm text-zinc-600">{project.note}</p>}
            </div>

            <div className="px-4 lg:px-8">
                <PhotoGallery
                    title={project.title}
                    photos={project.images.map((img) => ({ ...img, ratio: ratioOf(img.image) }))}
                />
            </div>
        </main>
    );
}
