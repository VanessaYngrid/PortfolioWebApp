export default function Presentation() {
    return (
        <div id="about" className="bg-[#F9F9F9] overflow-x-hidden pt-8 md:pt-12 md:px-4 lg:px-8">
            <div className="text-center">
                <h1 className="text-[#4A1942] text-4xl font-bold">ABOUT ME</h1>
                <p className="text-[#4A1942] text-md pt-2">Get to know me more</p>
            </div>
            <div className="flex flex-col md:flex-row px-4 lg:mx-16 pt-4 pb-10">
                <div className="md:w-1/3 p-4 flex flex-col gap-6 justify-center text-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-3xl font-bold text-[#893168]">+4 years</p>
                        <p className="text-md text-[#893168]">Professional Experience</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-3xl font-bold text-[#893168]">5 projects</p>
                        <p className="text-md text-[#893168]">Software Development</p>
                    </div>
                </div>
                
                <div className="md:w-2/3 px-4 pt-4 pb-2 md:p-6 flex flex-col justify-center">
                    <p className="text-gray-600 mb-4 text-[16px] lg:text-[17px] leading-relaxed">
                        Business Analyst with over 4 years of experience in the financial sector, specializing in process optimization, operational monitoring, process mapping, and data management. Skilled in applying Agile methodologies such as Lean and Scrum to improve efficiency and stakeholder satisfaction. Experienced in cross-functional collaboration, aligning business goals with operational and technical requirements.
                    </p>
                    <p className="text-gray-600 text-[16px] lg:text-[17px] leading-relaxed">
                        Background in industrial engineering and software development, providing a strong foundation in analytical thinking, problem-solving, adaptability, and effective communication across diverse teams. Proven ability to drive improvements in complex organizational environments, with experience in both Latin America and Canada.
                    </p>
                </div>
            </div>
        </div>
    );
}

