"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ModeToggle from "./toggleDarkMode"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"


export function NavigationMenuCustom() {
    const pathName = usePathname();
    // Tighter padding on phones so all links and the theme toggle fit at 400px
    const linkStyle = cn(navigationMenuTriggerStyle(), "px-2.5 sm:px-4");

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-sm shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-md font-bold hidden lg:block">{pathName === "/" ? "Dev " : "Media"} Portfolio</div>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={linkStyle}>
                                <Link href="#home">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {pathName === "/" && (
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={linkStyle}>
                                    <Link href="#about">About</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={linkStyle}>
                                <Link href="#projects">{pathName === "/" ? "Projects" : "Photos"}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        {pathName !== "/" && (
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={linkStyle}>
                                    <Link href="#video">Videos</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        )}
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={linkStyle}>
                                <Link href="#contact">Contact</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <ModeToggle></ModeToggle>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

