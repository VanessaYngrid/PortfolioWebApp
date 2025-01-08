
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
            responsibilities3: string,
            responsibilities4: string,
            responsibilities5?: string,
            responsibilities6?: string,
        }
    }

    // Define the job experiences
    //para portfolio -> actualizar las responsabilidades
    const jobExperiences: JobExperience [] = [
        {
            company: "YULCOM Technologies - Canada",
            department: "Development Team",
            position: "Web Developer Intern",
            dateRange: "Sep 2024 - Nov 2024",
            responsibilities: {
                responsibilities1: "Developed responsive Front-End interfaces using Angular, TypeScript and Tailwind CSS for seamless user experiences across web platforms.",
                responsibilities2:"Integrated external and Django RESTful APIs to fetch and render dynamic data, ensuring smooth collaboration with Back-End teams.",
                responsibilities3: "Implemented internationalization (i18n) to adapt the application for a global audience.",
                responsibilities4: "Contributed in an Agile environment, participating in daily meetings and code reviews.",
                responsibilities5: "Utilized Git and Bitbucket for version control, and managed tasks through Jira.",
                responsibilities6: "Coordinated communication between the client and internal teams, overseeing the migration and delivery of technical support for an international project in Latin America."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Vehicle Department",
            position: "Process Engineer",
            dateRange: "Sep 2021 - Oct 2022",
            responsibilities: {
                responsibilities1: "Worked with cross-functional teams to implement continuous process improvements across the vehicle financing journey, improving customer experience and operational efficiency.",
                responsibilities2: "Led Lean process optimization initiatives to streamline vehicle financing operations, addressing customer needs, reducing cycle time and enhancing user satisfaction.",
                responsibilities3: "Trained cross-functional teams on BPMN to identify process bottlenecks and implement efficient solutions.",
                responsibilities4: "Participated in a team that implemented the Scrum framework as its working model."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Insurance Operations Accounting Management",
            position: "Junior Operational Financial Analyst",
            dateRange: "Apr 2020 - Sep 2021",
            responsibilities: {
                responsibilities1: "Implemented Lean methodology to optimize operations, reducing waste and improving efficiency in insurance and pension services.",
                responsibilities2: "Represented the department in continuous quality improvement initiatives and established key performance indicators (KPIs) to monitor process effectiveness.",
                responsibilities3: "Mapped and optimized end-to-end BPMN flows, identifying pain points for improved service delivery.",
                responsibilities4: "Led cross-department projects to improve communication and operational effectiveness."
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