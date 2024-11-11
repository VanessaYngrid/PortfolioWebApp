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
                        I am a software development student with proficiency in web and mobile application development. My experience includes front-end development, building user interfaces, server-side development, database design, and a solid foundation in object-oriented programming.
                    </p>
                    <p className="text-gray-600 mb-4 text-[16px] lg:text-[17px] leading-relaxed">
                        I have 4 years of experience in a financial institution as a financial analyst and process engineer, specializing in process improvement through agile methodologies, particularly the Scrum framework.
                    </p>
                    <p className="text-gray-600 text-[16px] lg:text-[17px] leading-relaxed">
                        My previous bachelor&apos;s degree in industrial engineering and work experience were essential in developing my problem-solving and interpersonal skills through my analytical thinking, communication, and collaboration skills.
                    </p>
                </div>
            </div>
        </div>
    );
}

