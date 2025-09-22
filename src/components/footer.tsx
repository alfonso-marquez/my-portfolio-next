import GithubIcon from "./icons/githubIcon";
import InstagramIcon from "./icons/instagramIcon";
import LinkedinIcon from "./icons/linkedinIcon";
import YoutubeIcon from "./icons/youtubeIcon";
import { Separator } from "./ui/separator";


export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24">
            <div className="max-w-[1300px] w-full p-20">

                <Separator className="mt-8 mb-4" />
                <div className="flex justify-between gap-2">
                    <div className="space-y-1 flex gap-1 ">
                        <a href="https://github.com/alfonso-marquez" target="_blank"><GithubIcon /></a>
                        <a href="https://linkedin.com/in/fonsomarquez/" target="_blank"><LinkedinIcon /></a>
                        <a href="https://www.instagram.com/alfonsomrqz/" target="_blank"><InstagramIcon /></a>
                        <a href="https://www.youtube.com/channel/UCI7rCtpVLhc9ZP2sKjSPlSA" target="_blank"><YoutubeIcon /></a>
                    </div>
                    <div >
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Alfonso Marquez
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}