import { NextResponse } from "next/server";

export async function GET(){

    //Define the TypeScript type for contact info
    type AgileSkills = {
        agile: string[],
        certification: string[],
    };

    const agileObject: AgileSkills = {
        agile: ["Scrum", "Design Thinking", "Lean", "UML diagrams", "Project Management", "OKR"],
        certification: ["Professional Scrum Master Certification PSM1", "OKRCP OKR Certified Professional"]
    };

    //Return the JSON response
    return NextResponse.json(agileObject, {status:200});

}