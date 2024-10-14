'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

type ContactInfo = {
    contact_id: string;
    email: string;
    address: string;
};


export default function Contact(){

    const [contactInfo, setContactInfo] = useState<ContactInfo>({
        contact_id: "",
        email: "",
        address: "",
    });

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contactinfo`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
                setContactInfo(data);
            });
    }, []);

    return(
    <div>
        <div className="text-center pt-10">
            <h1 className="text-black text-3xl font-bold">CONTACT ME</h1> 
            <p className="text-black text-md mt-4">Feel free to contact me by submitting the form below or sending me an email</p>
            <p className="font-medium mt-2 flex items-center justify-center">
                <Image
                    src="/icons/email.png"
                    alt="email"
                    width={22} // Adjust the width as needed
                    height={22} // Adjust the height as needed
                    className="mr-2" // Space between icon and text
                />
                {contactInfo.email}
            </p>
        </div>
        <div className="font-sans max-w-7xl max-lg:max-w-3xl mx-auto p-4">
            <div className="bg-white shadow-sm rounded py-8 px-12">
                <div className="grid lg:grid-cols-2 items-start gap-12">
                    <form className="space-y-3 text-gray-800">
                        <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-gray-100 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600"
                        />
                        <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-gray-100 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600"
                        />
                        <input
                        type="text"
                        placeholder="Phone No."
                        className="w-full bg-gray-100 rounded py-3 px-6 text-sm focus:bg-transparent focus:outline-blue-600"
                        />
                        <textarea
                        placeholder="Message"
                        rows={6}
                        className="w-full bg-gray-100 rounded px-6 text-sm pt-3 focus:bg-transparent focus:outline-blue-600"
                        />
                        <button
                        type="button"
                        className="text-white bg-blue-600 hover:bg-blue-700 rounded text-sm px-6 py-3 mt-6"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16px"
                            height="16px"
                            fill="currentColor"
                            className="mr-2 inline"
                            viewBox="0 0 548.244 548.244"
                        >
                            <path
                            fillRule="evenodd"
                            d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                            clipRule="evenodd"
                            />
                        </svg>
                        Send Message
                        </button>
                    </form>

                    <div className="grid sm:grid-cols-2 gap-12">
                        map
                    </div>
                </div>
            </div>
        </div>
    </div>  
    );
}