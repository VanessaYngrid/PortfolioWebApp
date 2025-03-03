import { NextResponse } from "next/server";

export async function GET(){

    //Define the TypeScript type for contact info
    type LanguageSkills = {
        language_id: string,
        language: string,
        level: string,
    }

    const languageObject: LanguageSkills[] = [
        {
            language_id: "l001",
            language: "English",
            level: "Advanced"
        },
        {
            language_id: "l002",
            language: "French",
            level: "Advanced"
        },
        {
            language_id: "l003",
            language: "Spanish",
            level: "Native"
        },
        {
            language_id: "l004",
            language: "Portuguese",
            level: "Fluent"
        }    
    ]

    //Return the JSON response
    return NextResponse.json(languageObject, {status:200});

}