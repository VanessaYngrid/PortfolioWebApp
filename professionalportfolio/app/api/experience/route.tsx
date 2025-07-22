
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
            responsibilities4?: string,
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
            position: "Web Developer Intern (CO-OP)",
            dateRange: "Sep. 2024 - Nov. 2024",
            responsibilities: {
                responsibilities1: "Developed responsive front-end interfaces using Angular, TypeScript, CSS, and Tailwind CSS to deliver seamless user experiences across web platforms.",
                responsibilities2: "Integrated external RESTful APIs built with Django to fetch and display dynamic data, ensuring smooth collaboration with back-end teams.",
                responsibilities3: "Executed Docker containers locally to access APIs and test Front-End integrations effectively.",
                responsibilities4: "Contributed in an Agile environment, participating in daily stand-up meetings and code reviews.",
                responsibilities5: "Used Git and Bitbucket for version control, and managed tasks through Jira.",
            }
        },
        {
            company: "ATLAS COPCO - Canada",
            department: "Logistics and Warehouse Operations",
            position: "Logistics Clerk (Part-time - Contract)",
            dateRange: "May 2023 - May 2024",
            responsibilities: {
                responsibilities1: "Processed over 20 shipping orders per day and entered data into SAP, ensuring the accuracy and reliability of logistics information.",
                responsibilities2: "Coordinated logistics with more than 7 carriers to ensure on-time deliveries, maintaining consistent communication by phone and email.",
                responsibilities3: "Maintained detailed records of transactions, inventory levels, and shipping logs to support smooth warehouse operations.",
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Middle Office, Vehicle Financing",
            position: "Business Analyst",
            dateRange: "Sep. 2021 - Oct. 2022",
            responsibilities: {
                responsibilities1: "Participated in teams that implemented the Scrum framework as a working model.",
                responsibilities2: "Led Lean process optimization initiatives in 3 departments to streamline vehicle financing operations, reduce processing times, and improve user satisfaction by 60%.",
                responsibilities3: "Mapped 9 end-to-end BPMN workflows, identifying bottlenecks and implementing solutions that improved operational efficiency.",
                responsibilities4: "Collaborated with Operations, Sales, UX, and Technology teams to optimize customer journey processes in vehicle financing, enhancing operational efficiency and user satisfaction.",
                responsibilities5: "Monitored key performance indicators (KPIs) to measure process efficiency at the departmental level.",
                responsibilities6: "Trained 14 cross-functional team members in BPMN workflow mapping and Lean methodology."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Back Office, Accounting Operations",
            position: "Junior Business Analyst",
            dateRange: "Apr. 2020 - Sep. 2021",
            responsibilities: {
                responsibilities1: "Performed account reconciliations in Excel on various products (claims, accounts payable and receivable, provident funds, insurance), ensuring accuracy and consistency of financial data for analysis and control.",
                responsibilities2: "Led cross-functional projects involving 4 departments to improve operational efficiency and communication, by documenting and standardizing business rules for automation purposes.",
                responsibilities3: "Mapped and optimized 5 end-to-end BPMN workflows, applying Lean methodology to identify bottlenecks and reduce operational effort by 80%.",
                responsibilities4: "Formalized business rules with operational analysts and transferred specifications to the IT team, contributing to process automation and reduction of accounting discrepancies.",
                responsibilities5: "Prepared monthly financial performance presentations for management, supporting strategic decision-making."
            }
        },
        {
            company: "ITAÚ UNIBANCO BANK - Brazil",
            department: "Back Office, Accounting Operations",
            position: "Financial Operations Intern",
            dateRange: "Jun. 2018 - Apr. 2020",
            responsibilities: {
                responsibilities1: "Acquired cross-functional experience by rotating through three departments, including Credit Card and Insurance Accounting, where I mapped end-to-end processes, identified inefficiencies, and proposed actionable improvements.",
                responsibilities2: "Led a Lean process improvement initiative in collaboration with IT analysts to automate workflows, reduce manual errors, and enhance operational efficiency.",
                responsibilities3: "Prepared executive-level presentation materials for monthly management meetings, summarizing project progress and key performance indicators.",
                responsibilities4: "Supported the analytical reconciliation of credit card and insurance balance sheet accounts, ensuring accuracy, consistency, and compliance with internal financial policies."
            }
        }
    ];

    // Return the JSON response with job experiences
    return NextResponse.json(jobExperiences, {status: 200});

}