/*
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    // Define the TypeScript type for job experience
    type JobExperience = {
        company: string,
        department: string,
        position: string,
        dateRange: string,
        responsibilities: {
            responsibilities1: string,
            responsibilities2: string,
            responsibilities3?: string,
        }
    }

    // Define the job experiences
    //para portfolio -> actualizar las responsabilidades
    const jobExperiences: JobExperience [] = [
        {
            company: "ITAÚ UNIBANCO BANK (largest private bank in Latin America)",
            department: "Vehicle Department",
            position: "Process Engineer",
            dateRange: "Sep 2021 - Oct 2022",
            responsibilities: {
                responsibilities1: "Implemented the Scrum framework as the working model.",
                responsibilities2: "Applied Lean methodology and quality measures to enhance processes and resources.",
                responsibilities3: "Taught analysts process mapping and created end-to-end process flows."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK (largest private bank in Latin America)",
            department: "Accounting Operations Transformation Management",
            position: "Junior Operational Financial Analyst",
            dateRange: "Jan 2021 - Sep 2021",
            responsibilities: {
                responsibilities1: "Represented the department in quality and process improvement initiatives.",
                responsibilities2: "Facilitated retrospective meetings between management teams.",
                responsibilities3: "Collaborated with the project and processes team in mapping and establishing indicators for coordination processes."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK (largest private bank in Latin America)",
            department: "Insurance and Pension Accounting Processing Management",
            position: "Junior Operational Financial Analyst",
            dateRange: "Apr 2020 - Jan 2021",
            responsibilities: {
                responsibilities1: "Implemented Lean methodology to improve process flow.",
                responsibilities2: "Mapped end-to-end process flows to identify pain points and improve operations.",
                responsibilities3: "Specified tools for automating processes and documented procedure manuals."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK (largest private bank in Latin America)",
            department: "Credit Card and Insurance Accounting Processing Management",
            position: "Intern",
            dateRange: "Aug 2018 - Apr 2020",
            responsibilities: {
                responsibilities1: "End-to-end process mapping to identify gaps, process pain points,  improvement opportunities and action plans.",
                responsibilities2: "Development of materials for monthly management meetings.",
                responsibilities3: "Assistance in the analytical reconciliation of credit card and Insurance balance sheet accounts."
            }
        }
    ];

    // Return the JSON response with job experiences
    return NextResponse.json(jobExperiences, {status: 200});

}
*/