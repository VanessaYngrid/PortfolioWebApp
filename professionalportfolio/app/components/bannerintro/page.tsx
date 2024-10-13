'use client'

import Image from "next/image";
import AnimatedText from "../animatedtext/page";

export default function BannerIntro() {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center pt-10 px-4 md:px-12 lg:px-2 overflow-x-hidden">
            <div className="flex flex-col items-start md:items-start md:mr-2 mb-6 md:mb-0">
            <p className="text-black text-xl md:text-2xl font-bold">Hello, I am</p>
            <p className="text-black text-3xl md:text-4xl font-bold">Vanessa Yngrid Chuquitaipe Vargas</p>
            <p className="text-black text-lg md:text-xl font-bold pt-4">Software Developer & Industrial Engineer</p>
            <p className="text-black text-lg md:text-xl font-normal">Specializing in <AnimatedText/></p>

            <div className="flex space-x-4 mt-6">
                <a href="https://www.linkedin.com/in/vanessa-yngrid-chuquitaipe-vargas/" target="_blank" rel="noopener noreferrer" className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                </a>

                <a href="https://github.com/VanessaYngrid" target="_blank" rel="noopener noreferrer" className="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-8 w-8" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>

                <a 
                    href="/pdfs/curriculum.pdf" 
                    download 
                    className="inline-block bg-[#eee] text-black py-1 px-4 rounded-full hover:bg-[#c3bebe] transition"
                >
                    Download CV
                </a>
            </div>
        </div>

        <div className="flex justify-center items-center md:ml-20">
            <Image
                src="/images/avatar.png"
                alt="avatar intro"
                width={300}
                height={300}
                className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72"
            />
        </div>
    </div>
    );
}
