import { NextResponse } from "next/server";

export async function GET() {

    // Define the TypeScript type for contact info
    type TechnologySkills = {
        programming: {
            frontend: { name: string, knowledge: number }[],
            backend: { name: string, knowledge: number }[],
            database: { name: string, knowledge: number }[],
        },
        tools: string[],
    };

    const TechnologyObject: TechnologySkills = {
        programming: {
            frontend: [
                { name: "HTML", knowledge: 98 },
                { name: "CSS", knowledge: 90 },
                { name: "Bootstrap", knowledge: 95 },
                { name: "JavaScript ", knowledge: 85 },
                { name: "TypeScript", knowledge: 85 },
                { name: "React.js", knowledge: 85 },
                { name: "Angular", knowledge: 80 },
                { name: "Next.js", knowledge: 80 },
                { name: "Tailwind CSS", knowledge: 95 },
            ],
            backend: [
                { name: "Java", knowledge: 85 },
                { name: "RESTful APIs", knowledge: 90 },
                { name: "Third-Party APIs", knowledge: 90 },
                { name: "Java for Android", knowledge: 70 },
                { name: "Node.js", knowledge: 70 },
                { name: "C#", knowledge: 50 },
            ],
            database: [
                { name: "SQL", knowledge: 85 },
                { name: "MongoDB", knowledge: 60 },
                { name: "Firebase", knowledge: 80 },
            ],
        },
        tools: [
            "Git", "Jira", "Figma" , "Visual Studio Code", "Android Studio", "Miro","Bizagi", "Draw io",
            "Eclipse", "Excel", "PowerPoint", "Word"
        ],
    };

    return NextResponse.json(TechnologyObject);
}
