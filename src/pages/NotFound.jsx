import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
    return <div>
        <ThemeToggle/>
        <StarBackground/>
        <div className="container flex items-center justify-center h-screen"> 
                <a className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Page Not Found </span> 
                    </span>
                </a>
        </div>
    </div>;
};