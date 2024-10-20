import { NextResponse } from "next/server";

export async function GET(){

    //Define the TypeScript type for contact info
    type TechnologySkills = {
        softSkills: string[],
    };

    const TechnologyObject: TechnologySkills = {
        softSkills: ["Adaptability", "Communication", "TeamWork", "Problem Solving", "Creativity", "Critical Thinking"],
    };

    //Return the JSON response
    return NextResponse.json(TechnologyObject, {status:200});

}