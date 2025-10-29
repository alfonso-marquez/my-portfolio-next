'use client';

import { usePathname } from 'next/navigation';
import { NavigationMenuCustom } from '@/components/navbar';
import Footer from '@/components/footer';

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPrivacyPage = pathname === '/privacy';

    if (isPrivacyPage) {
        return <>{children}</>;
    }

    return (
        <>
            <NavigationMenuCustom />
            {children}
            <Footer />
        </>
    );
}