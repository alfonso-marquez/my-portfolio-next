import { Hero1 } from "@/components/hero";
export default function Home() {
    return (
        <div className="font-sans items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
            <Hero1 heading="Jose Alfonso Marquez" description="Software Engineer" image={{ src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg", alt: "Hero section demo image showing interface components" }} />
        </div>
    );
}
