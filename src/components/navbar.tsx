"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import GithubIcon from "./icons/githubIcon"
import InstagramIcon from "./icons/instagramIcon"
import LinkedinIcon from "./icons/linkedinIcon"
import TiktokIcon from "./icons/tiktokIcon"

const linkStyle = "text-[13px] sm:text-sm text-zinc-600 transition-colors hover:text-zinc-950 hover:underline underline-offset-[6px] decoration-1"
const activeStyle = "text-zinc-950 underline"

export function NavigationMenuCustom() {
    const pathName = usePathname();
    const isDev = pathName === "/";
    // Photo project pages (/media/<slug>) point their section links back at /media
    const isPhotoProject = pathName.startsWith("/media/");
    const media = isPhotoProject ? "/media" : "";

    // Section anchors on the two portfolio pages; page links on /about
    const links = pathName === "/about"
        ? [
            { href: "/", label: "Dev" },
            { href: "/media", label: "Media" },
            { href: "/about", label: "About" },
        ]
        : isDev
            ? [
                { href: "/about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
            ]
            : [
                { href: `${media}#projects`, label: "Photos" },
                { href: `${media}#video`, label: "Videos" },
                // No Contact here: the About page's Connect section covers it
                { href: "/about", label: "About" },
            ];

    const socials = isDev
        ? [
            { href: "https://github.com/alfonso-marquez", label: "GitHub", icon: <GithubIcon /> },
            { href: "https://linkedin.com/in/fonsomarquez/", label: "LinkedIn", icon: <LinkedinIcon /> },
        ]
        : [
            { href: "https://www.instagram.com/alfonsomrqz/", label: "Instagram", icon: <InstagramIcon /> },
            { href: "https://www.tiktok.com/@alfonsomrqz", label: "TikTok", icon: <TiktokIcon /> },
        ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
            <div className="max-w-7xl mx-auto px-4 h-14 flex justify-between items-center gap-4">
                {/* Wordmark doubles as the home link: top of the current page, or /media from a photo project */}
                <a href={isPhotoProject ? "/media" : "#"} className="text-[11px] sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-zinc-950 whitespace-nowrap">
                    Alfonso Marquez
                </a>
                <nav className="flex items-center gap-3 sm:gap-6">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className={`${linkStyle} ${link.href === pathName ? activeStyle : ""}`}>
                            {link.label}
                        </Link>
                    ))}
                    {/* Icons only where there is room */}
                    <div className="hidden sm:flex items-center gap-3 [&_svg]:size-[18px]">
                        {socials.map((social) => (
                            <a key={social.href} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}
