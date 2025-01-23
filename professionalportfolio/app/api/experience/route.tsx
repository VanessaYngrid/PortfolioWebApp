
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
            responsibilities7?: string,
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
                responsibilities1: "Developed dynamic and responsive Front-End interfaces using Angular, JavaScript, TypeScript, and Tailwind CSS, enhancing user experiences across web platforms.",
                responsibilities2: "Integrated external APIs and Django RESTful APIs to fetch and render dynamic data, ensuring seamless collaboration with Back-End teams.",
                responsibilities3: "Executed Docker containers locally to access APIs and test Front-End integrations effectively.",
                responsibilities4: "Implemented internationalization (i18n) to adapt the application for a global audience.",
                responsibilities5: "Actively collaborated in an Agile environment, participating in daily meetings and code reviews.",
                responsibilities6: "Utilized Git and Bitbucket for version control, and managed tasks through Jira.",
                responsibilities7: "Coordinated communication between the client and internal teams, overseeing the migration and delivery of technical support for an international project in Latin America."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Vehicle Operations Management",
            position: "Business Analyst - Process Optimization",
            dateRange: "Sep 2021 - Oct 2022",
            responsibilities: {
                responsibilities1: "Participated in teams that implemented the Scrum framework as its working model.",
                responsibilities2: "Worked with Technology, UX, and Sales teams to implement process improvements, enhancing customer experience in vehicle financing operations.",
                responsibilities3: "Mapped 9 end-to-end BPMN flows, identifying process bottlenecks and implementing solutions that improved operational efficiency.",
                responsibilities4: "Represented the department in continuous quality improvement initiatives and established key performance indicators (KPIs) to monitor process effectiveness.",
                responsibilities5: "Led Lean process optimization initiatives in 3 departments to streamline vehicle financing operations, reduce cycle time, and enhance user satisfaction by 60%.",
                responsibilities6: "Trained 14 cross-functional team members in mapping BPMN flow and Lean methodologies."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Financial Operations Management - Insurance Accounting",
            position: "Junior Business Analyst",
            dateRange: "Apr 2020 - Sep 2021",
            responsibilities: {
                responsibilities1: "Led cross-department projects across 4 different areas to improve operational effectiveness and communication, documenting business rules for process automation.",
                responsibilities2: "Mapped and optimized 5 end-to-end BPMN flows, identifying pain points and reducing operational effort by 80%.",
                responsibilities3: "Applied Lean methodologies to reduce operational waste and improve the efficiency of insurance services, helping to reduce accounting discrepancies.",
                responsibilities4: "Performed data entry for insurance processes, ensuring data accuracy and consistency for business analysis and decision-making.",
                responsibilities5: "Prepared monthly performance reports for senior management presentations."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Financial Operations Management - Credit Card and Insurance Accounting",
            position: "Financial Operations Intern",
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