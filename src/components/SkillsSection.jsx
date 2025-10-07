import { useState, useEffect, act} from "react";
import {cn} from "@/lib/utils";

const skills = [
    //frontend WORK ON MORE LATER
    {name: "HTML/CSS", level: 60, category: "frontend"},
    {name: "JavaScript", level: 60, category: "frontend"},
    {name: "React", level: 60, category: "frontend"}, 
    {name: "TailwindCSS", level: 70, category: "frontend"},  
    
    //backend
    {name: "Java", level: 95, category: "backend"},
    {name: "Python", level: 90, category: "backend"},
    {name: "Node.js", level: 50, category: "backend"},
    {name: "SQL", level: 50, category: "backend"}, 

    //tools
    {name: "VS Code", level: 95, category: "tools"}, 
    {name: "Git/GitHub", level: 50, category: "tools"},

    //coursework
    {name: "Algorithms & Data Structures", level: 100, category: "coursework"},
    {name: "Discrete Structues", level: 100, category: "coursework"},
    {name: "Calculus I", level: 100, category: "coursework"}, 
    {name: "Principles of Database Systems", level: 50, category: "coursework"},
    {name: "Platform Based Computing", level: 50, category: "coursework"}, 
    {name: "Statistics", level: 50, category: "coursework"}, 
]

const categories = ["all skills", "frontend", "backend", "tools", "coursework"];

export const SkillsSection = () => {
    const [activeCateory,setActiveCategory] = useState("all skills");
    
    const filteredSkills = skills.filter((skill) => {
    if (activeCateory === "all skills") {
        // show everything EXCEPT coursework
        return skill.category !== "coursework";
    }
    return skill.category === activeCateory;
});
    return (
        <section 
            id ="skills" 
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-12 text-center text-muted-foreground">
                    And <span className="text-primary"> Coursework</span>
                </h3>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCateory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>   
                    ))}
                </div>

                <div className="grid grid-cols-1  sm:grid-cols-2 lg grid-cols-3 gap-6">
                    {filteredSkills.map((skill,key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                style={{width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        
        </section>
    );
};