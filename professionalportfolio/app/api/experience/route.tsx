
import { NextResponse } from "next/server";

export async function GET() {

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
            responsibilities4?: string,
        }
    }

    // Define the job experiences
    //para portfolio -> actualizar las responsabilidades
    const jobExperiences: JobExperience [] = [
        {
            company: "YULCOM Technologies - Canada",
            department: "Development Team",
            position: "Web Developer Intern",
            dateRange: "Sep 2024 - Present",
            responsibilities: {
                responsibilities1: "Developed responsive front-end interfaces using TypeScript, Tailwind CSS, and Angular, optimizing UI components to improve performance and deliver a seamless user experience across web platforms.",
                responsibilities2:"Integrated and fetched data from external APIs, implementing internationalization (i18n) features to support global audiences.",
                responsibilities3: "Collaborated within an agile team, participating in daily meetings and code reviews.",
                responsibilities4: "Utilized Git and Bitbucket for version control, and managed project tasks and progress using Jira."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Vehicle Department",
            position: "Process Engineer",
            dateRange: "Sep 2021 - Oct 2022",
            responsibilities: {
                responsibilities1: "Worked in a team that implemented the Scrum framework as its working model.",
                responsibilities2: "Applied the Lean methodology, as well as quality measures to enhance processes, resources, and overall user journey in the vehicle financing process.",
                responsibilities3: "Taught analysts to map, create end-to-end process flows, and identify bottlenecks.",
                responsibilities4: "Interviewed analysts on vehicle financing sales to gain process insights and collaborated with technology and UX teams to enhance the sales journey."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Accounting Operations Transformation Management",
            position: "Junior Operational Financial Analyst",
            dateRange: "Jan 2021 - Sep 2021",
            responsibilities: {
                responsibilities1: "Represented the department in quality and continuous process improvement initiatives.",
                responsibilities2: "Facilitated retrospective meetings between management teams.",
                responsibilities3: "Collaborated with the project and processes team in mapping and establishing indicators for coordination processes."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
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
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Credit Card and Insurance Accounting Processing Management",
            position: "Operational Financial Intern",
            dateRange: "Aug 2018 - Apr 2020",
            responsibilities: {
                responsibilities1: "End-to-end process mapping to identify gaps, process pain points, improvement opportunities and action plans.",
                responsibilities2: "Development of materials for monthly management meetings.",
                responsibilities3: "Assistance in the analytical reconciliation of credit card and Insurance balance sheet accounts."
            }
        }
    ];

    // Return the JSON response with job experiences
    return NextResponse.json(jobExperiences, {status: 200});

}