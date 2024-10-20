import { NextResponse } from "next/server";

export async function GET(){

    //Define the TypeScript type for contact info
    type SoftSkills = {
        softSkills: string[],
    };

    const TechnologyObject: SoftSkills = {
        softSkills: ["Adaptability", "Communication", "TeamWork", "Problem Solving", "Creativity", "Critical Thinking"],
    };

    //Return the JSON response
    return NextResponse.json(TechnologyObject, {status:200});

}