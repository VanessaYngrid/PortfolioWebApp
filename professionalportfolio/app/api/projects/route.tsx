import { NextResponse } from "next/server";

export async function GET(){

    //Define the TypeScript type for contact info
    type Projects = {
        project_id: string,
        title: string,
        duration: string,
        description: {
            description1: string,
            description2: string,
            description3?: string,
            description4?: string,},
        technologies: string[],
        image: string,
    }

    //Create an Projects object
    const projectsObject: Projects[] = [
        {
            project_id: "p001",
            title: "Personal Portfolio Web Application",
            duration: "August 2024 - Present",
            description: {
                description1: "Developed a responsive portfolio website using TypeScript, React.js, Next.js, and Tailwind CSS to ensure a modern and user-friendly experience.",
                description2: "Implemented comprehensive navigation pages for education, professional experience, ojects, and skills, all structured in a custom API and fetched into components using React hooks.",
                description3: "Integrated external APIs, including Weather API, to fetch and display real-time geographical and weather data, and embedded Google Maps."
            },
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "Google Maps API"],
            image: " "
        },
        {
            project_id: "p002",
            title: "Massage Therapy Booking Web Application",
            duration: "July 2024 - Aug 2024",
            description: {
                description1: "Developed a comprehensive web application with two team members, using TypeScript,React.js and Tailwind CSS.",
                description2: "Implemented server-side logic using Next.js, managing a MongoDB database and fetching data through APIs for user, services data and appointments.",
                description3: "Designed the prototype in Figma, integrated Google Maps, and implemented Stripe for secure payments, supporting user login, registration, profile updates, and appointment bookings."
            },
            technologies: ["React.js", "TypeScript", "Tailwind CSS", "Next.js", "MongoDB", "Figma", "Google Maps API"],
            image: " "
        },
        {
            project_id: "p003",
            title: "Natural Beauty Store Mobile Application",
            duration: "June 2024 – Aug 2024",
            description: {
                description1: "Developed using Java in Android Studio, implementing the Model-View-Controller (MVC) architecture and Android SDK frameworks.",
                description2: "Implemented features like user login, product browsing, profile management, and display of beauty tips and user feedback, along with Google Maps API integration, utilizing XML for UI design.",
                description3: "Utilized Firebase for authentication, data storage, managing user feedback and beauty tips.",
                description4: "Employed fragments for dynamic UI components to enhance user experience."
            },
            technologies: ["Java", "Android Studio", "MVC", "Android SDK", "XML"],
            image: " "
        },
        {
            project_id: "p004",
            title: "Como Se Llama ECommerce Clothing Store",
            duration: "Sep 2023 - Dec 2023",
            description: {
                description1: "Developed a clothing store web application using Visual Studio Code, HTML, CSS, JavaScript, Bootstrap, and JQuery collaboratively with a study colleague.",
                description2: "Orchestrated the design framework to ensure a user-friendly, responsive interface, including a real-time search bar with product data and refined filters, and contributed to developing the login system."
            },
            technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "JQuery", "Visual Studio Code"],
            image: " "
        },
        {
            project_id: "p005",
            title: "E Figuro Employee Management System",
            duration: "Sep 2023 - Dec 2023",
            description: {
                description1: "Developed as a team a desktop application HR system using Visual Studio (C#, ASP.NET, WPF) to facilitate small to medium-sized businesses to manage their employees.",
                description2: "Ensured all project functionalities were implemented with respect to MVC (Model-View-Controller) design pattern."
            },
            technologies: ["C#", "Visual Studio", "MVC", "API"],
            image: " "
        }
    ];

    //Return the JSON response
    return NextResponse.json(projectsObject, {status:200});

}