import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "FinLit",
        description: "FinLit is a website being designed to gamify finanical literacy so it can be taught to college students and professionals seeking training in the topic.",
        image: "/projects/FinLit.jpg",
        tags: ["React", "TailwindCSS", "Finance"],
        demoUrl: "#",
        githubUrl: "$",
    },

    {
        id: 2,
        title: "Villanova Software Engineers",
        description: "Where innovation meets collaboration. VSE is a student run organization creating amazing projects and solving real life problems together.",
        image: "/projects/VSE.png",
        tags: ["React", "TailwindCSS", "University"],
        demoUrl: "https://www.villanovasoftwareengineers.com/",
        githubUrl: "https://github.com/Villanova-Software-Engineers",
    },
    {
        id: 3,
        title: "Coming Soon...",
        description: "More projects coming soon.",
        image: "/projects/ComingSoon.jpg",
        tags: ["React", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-muted-foreground">
                    And <span className="text-primary"> VSE</span>
                </h3>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Personal projects and projects that I'm currently working on with VSE. 
                </p>

                

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"> 
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transiton-transform duration-500 group-hover:scale-110"/>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground  ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">  
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                        <Github size={20}/>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/Mason438" target="_blank"> 
                        Check My Github <ArrowRight size={16} />
                    </a>

                </div>
            </div>
        </section>
    );
};