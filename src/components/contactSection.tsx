import type { ReactNode } from "react";

interface ContactSectionProps {
    socials: { href: string, label: string, icon: ReactNode }[]
}

// Shared by the dev and media pages; each passes the socials that fit its audience
const ContactSection = ({ socials }: ContactSectionProps) => (
    <section id="contact" className="w-full flex flex-col items-center justify-center gap-4 px-4 py-32 text-center">
        <h2 className="text-3xl font-semibold tracking-tight lg:text-5xl">Contact</h2>
        <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">Reach out via email or social media.</p>
        <a className="text-lg text-zinc-950 underline-offset-4 hover:underline" href="mailto:marquez.josealfonso@gmail.com">
            marquez.josealfonso@gmail.com
        </a>
        <div className="flex gap-3">
            {socials.map((social) => (
                <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    {social.icon}
                </a>
            ))}
        </div>
    </section>
);

export { ContactSection };
