
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
                responsibilities1: "Developed responsive front-end interfaces using TypeScript, Tailwind CSS, and Angular, optimizing UI components to deliver a seamless user experience across web platforms.",
                responsibilities2:"Integrated and fetched data from external APIs, implementing internationalization (i18n) for global audience support.",
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
                responsibilities2: "Led process optimization initiatives using Lean methodology and quality measures to streamline the vehicle financing process and enhance the user experience, addressing customer needs and pain points.",
                responsibilities3: "Trained analysts on mapping BPMN end-to-end processes, identifying bottlenecks, and creating actionable improvement plans.",
                responsibilities4: "Worked with technology, UX teams, and sales analysts to design and implement process improvements in the vehicle financing journey."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Insurance Operations Accounting Management",
            position: "Junior Operational Financial Analyst",
            dateRange: "Apr 2020 - Sep 2021",
            responsibilities: {
                responsibilities1: "Implemented Lean methodology to streamline department processes, reduce waste, and improve efficiency across insurance and pension operations, while leading cross-departmental projects to enhance communication and coordination.",
                responsibilities2: "Represented the department in continuous quality improvement initiatives and established key performance indicators (KPIs) to monitor process effectiveness.",
                responsibilities3: "Mapped and designed end-to-end BPMN process flows to identify pain points and optimize workflows."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Credit Card and Insurance Accounting Processing Management",
            position: "Operational Financial Intern",
            dateRange: "Aug 2018 - Apr 2020",
            responsibilities: {
                responsibilities1: "Led a Lean methodology project to identify process improvement opportunities, and collaborate with IT analysts to automate workflows, reducing manual errors and enhancing performance.",
                responsibilities2: "Gained cross-departmental experience by working in three different areas, including Credit Card and Insurance Accounting, where I mapped end-to-end processes, identified gaps, and developed action plans for process optimization.",
                responsibilities3: "Prepared materials for monthly management meetings, highlighting project progress and key outcomes.",
                responsibilities4: "Assisted in the analytical reconciliation of credit card and insurance balance sheet accounts, ensuring accuracy and compliance with financial standards."
            }
        }
    ];

    // Return the JSON response with job experiences
    return NextResponse.json(jobExperiences, {status: 200});

}