import {  NextResponse } from "next/server";

export async function GET(){

    //Define the TypeScript type for education
    type EducationInfo = {
        education_id: string,
        program: string,
        university: string,
        period: string,
        place: string,
        image: string,
    }

    //Create an Education object
    const educationObject: EducationInfo[] = [
        {
            education_id:"e001",
            program:"AEC Software Development: Desktop, Mobile and Web Application",
            university:"Vanier College",
            period:"January 2023 - December 2024 (Expected)",
            place:"Montreal, Canada",
            image:"/images/vaniercollege_image.jpg"
        },
        {
            education_id:"e002",
            program:"Bachelor of Industrial Engineering",
            university:"Mackenzie Presbyterian University",
            period:"January 2015 - July 2020",
            place:"São Paulo, Brazil",
            image:"/images/mackenzie_image.jpg"
        }
    ];

    //Return the JSON response
    return NextResponse.json(educationObject, {status:200});

}