export default function Footer() {
    return (
        <footer className="w-full border-t border-border">
            {/* Same container as the page content so the edges line up */}
            <div className="container mx-auto flex flex-col gap-2 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                <p>
                    Alfonso Marquez is a software engineer and photographer based in the Philippines.
                </p>
                <p className="flex gap-4">
                    <span>&copy; {new Date().getFullYear()}</span>
                    <a href="/privacy" className="underline-offset-4 transition-colors hover:text-zinc-950 hover:underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </footer>
    );
}
