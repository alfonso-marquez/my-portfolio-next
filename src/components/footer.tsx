import { Separator } from "./ui/separator";


export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24">
            <div className="max-w-[1300px] w-full p-20">

                <Separator className="mt-8 mb-4" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Alfonso Marquez
                    </p>
                    <a
                        href="/privacy"
                        className="text-sm text-muted-foreground underline hover:text-foreground transition-colors"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
}