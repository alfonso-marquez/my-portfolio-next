import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About — Alfonso Marquez",
    description: "Full-stack developer focused on AI agents and automation, and a photographer and videographer of live music, TCGs and tech.",
};

// Grouped like the About row: development on the left, photo and video on the right
const services = [
    {
        group: "Web & AI",
        items: [
            "Full-stack web apps",
            "AI integration (OpenAI)",
            "AI agents and agentic workflows",
            "Agent orchestration and tool integration (MCP)",
            "Workflow automation",
        ],
    },
    {
        group: "Photo & Video",
        items: ["Gig photography", "Corporate event coverage", "Video & editing"],
    },
];

const connect = [
    { label: "Instagram", href: "https://www.instagram.com/alfonsomrqz/" },
    { label: "TikTok", href: "https://www.tiktok.com/@alfonsomrqz" },
    { label: "YouTube", href: "https://www.youtube.com/@alfonsomarquez2077" },
    { label: "GitHub", href: "https://github.com/alfonso-marquez" },
    { label: "LinkedIn", href: "https://linkedin.com/in/fonsomarquez/" },
    { label: "Email", href: "mailto:marquez.josealfonso@gmail.com" },
];

const experience = [
    { title: "Software Engineer", detail: "Full-stack development with C#, Laravel, Node.js, React and AWS" },
    { title: "Philippine Army", detail: "Special Enlist, Software Developer" },
];

// One labelled row: label on the left, content on the right (stacked on phones)
const Row = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <section className="grid gap-3 md:grid-cols-2 md:gap-8">
        <h2 className="text-sm font-semibold text-zinc-950">{label}</h2>
        <div>{children}</div>
    </section>
);

// Dated list with hairline dividers; year column is optional
const List = ({ items }: { items: { year?: string, title: string, detail?: string }[] }) => (
    <ul className="divide-y divide-border border-y border-border">
        {items.map((item) => (
            <li key={item.title} className="flex gap-6 py-3 text-base">
                {item.year && <span className="w-12 shrink-0 tabular-nums text-zinc-500">{item.year}</span>}
                <span className="text-zinc-950">
                    {item.title}
                    {item.detail && <span className="text-zinc-600">, {item.detail}</span>}
                </span>
            </li>
        ))}
    </ul>
);

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 pt-28 pb-24 lg:pt-36">
            <div className="grid gap-10 md:grid-cols-2 md:gap-8">
                <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight lg:text-7xl">Hello.</h1>
                {/* Tall 9:16 photo cropped to 4:5, kept head to toe (object position biased below centre) */}
                <Image
                    src="/images/about/portrait.jpg"
                    alt="Alfonso Marquez walking between tiled walls, in black and white"
                    width={1600}
                    height={2845}
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[4/5] w-full object-cover object-[50%_60%]"
                />
            </div>

            <div className="mt-20 flex flex-col gap-16 lg:mt-28 lg:gap-20">
                <Row label="About.">
                    <p className="text-2xl leading-snug tracking-tight text-zinc-950 lg:text-3xl">
                        Full-stack developer with 6+ years of experience building web applications, now focused on AI agents and automation. Lately, I’ve been capturing moments through photos and video, drawn by my love of live music, TCGs and tech.
                    </p>
                    <div className="mt-10 grid gap-8 sm:grid-cols-2">
                        <div>
                            <h3 className="text-sm font-semibold text-zinc-950">
                                {/* Plain underlined links to each portfolio */}
                                <Link href="/" className="underline underline-offset-4 decoration-zinc-400 transition-colors hover:decoration-zinc-950">Development</Link>
                            </h3>
                            <p className="mt-3 text-base leading-relaxed text-zinc-600">
                                I build full-stack web applications with C#, Laravel, Node.js, React and AWS, and integrate OpenAI-powered agents and automated workflows into the tools teams already use.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-zinc-950">
                                <Link href="/media" className="underline underline-offset-4 decoration-zinc-400 transition-colors hover:decoration-zinc-950">Photo & Video</Link>
                            </h3>
                            <p className="mt-3 text-base leading-relaxed text-zinc-600">
                                I live for live music. A song really comes alive in a room full of people, and that’s the moment I try to catch. Off stage, I’m at the table playing Magic: The Gathering and other TCGs, shooting toys and cards, unboxing tech, and cutting short-form video for TikTok and Instagram. Always up for something new.
                            </p>
                        </div>
                    </div>
                </Row>

                <Row label="Services.">
                    <div className="grid gap-8 sm:grid-cols-2">
                        {services.map((service) => (
                            <div key={service.group}>
                                <h3 className="text-sm font-semibold text-zinc-950">{service.group}</h3>
                                <ul className="mt-3 space-y-1 text-base leading-relaxed text-zinc-600">
                                    {service.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Row>

                <Row label="Connect.">
                    <p className="text-base leading-relaxed">
                        {connect.map((link, i) => (
                            <span key={link.label}>
                                {i > 0 && <span className="text-zinc-400"> / </span>}
                                <a
                                    href={link.href}
                                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className="text-zinc-950 underline-offset-4 hover:underline"
                                >
                                    {link.label}
                                </a>
                            </span>
                        ))}
                    </p>
                </Row>

                <Row label="Experience.">
                    <List items={experience} />
                </Row>
            </div>
        </main>
    );
}
