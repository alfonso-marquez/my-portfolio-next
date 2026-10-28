import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About — Alfonso Marquez",
    description: "Full-stack developer and photographer of live music, toys and trading cards.",
};

const services = ["Web Development", "AI Integration", "Gig Photography", "Video & Editing"];

const connect = [
    { label: "Instagram", href: "https://www.instagram.com/alfonsomrqz/" },
    { label: "TikTok", href: "https://www.tiktok.com/@alfonsomrqz" },
    { label: "YouTube", href: "https://www.youtube.com/@alfonsomarquez2077" },
    { label: "GitHub", href: "https://github.com/alfonso-marquez" },
    { label: "LinkedIn", href: "https://linkedin.com/in/fonsomarquez/" },
    { label: "Email", href: "mailto:marquez.josealfonso@gmail.com" },
];

const gigs = [
    { year: "2026", title: "20 Years of Wabi-Sabi", detail: "Street Kohi" },
    { year: "2025", title: "NAPAKA MUSICK" },
    { year: "2024", title: "The Maine, Back in Manila", detail: "Photos used on the band's official Instagram" },
];

const experience = [
    { title: "Software Engineer", detail: "Full-stack development with C#, Laravel, React and AWS" },
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
                {/* Placeholder until the professional portrait is taken; the real one goes in grayscale */}
                <div
                    role="img"
                    aria-label="Portrait coming soon"
                    className="flex aspect-[3/2] w-full items-center justify-center bg-zinc-100 text-sm text-zinc-400"
                >
                    Portrait coming soon
                </div>
            </div>

            <div className="mt-20 flex flex-col gap-16 lg:mt-28 lg:gap-20">
                <Row label="About.">
                    <p className="text-2xl leading-snug tracking-tight text-zinc-950 lg:text-3xl">
                        Full-stack developer with 5+ years of experience, now building AI-powered features. Also a photographer of live music, toys and trading cards.
                    </p>
                    <div className="mt-10 grid gap-8 sm:grid-cols-2">
                        <div>
                            <h3 className="text-sm font-semibold text-zinc-950">Development</h3>
                            <p className="mt-3 text-base leading-relaxed text-zinc-600">
                                I build web applications end to end with C#, Laravel, React and AWS, and lately AI features on OpenAI and AWS Bedrock.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-zinc-950">Photo & Video</h3>
                            <p className="mt-3 text-base leading-relaxed text-zinc-600">
                                I shoot live music, toys and trading cards, and edit short-form video for TikTok and Instagram. Always up for something new.
                            </p>
                        </div>
                    </div>
                </Row>

                <Row label="Services.">
                    <p className="text-base leading-relaxed text-zinc-600">{services.join(", ")}</p>
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

                <Row label="Gigs.">
                    <List items={gigs} />
                </Row>

                <Row label="Experience.">
                    <List items={experience} />
                </Row>
            </div>
        </main>
    );
}
