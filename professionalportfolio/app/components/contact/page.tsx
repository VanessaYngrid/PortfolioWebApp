'use client';

import { useState, useEffect } from "react";
import Image from "next/image";

type ContactInfo = {
    contact_id: string;
    email: string;
    address: string;
};

export default function Contact() {
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

    return (
        <div className="bg-[#2B2B2B] py-10">
            <div>
                <div className="text-center">
                    <h1 className="text-white text-3xl font-bold">CONTACT ME</h1>
                    <p className="text-white text-md mt-4">Feel free to contact me by submitting the form below or sending me an email</p>
                    <p className="font-medium mt-2 text-white flex items-center justify-center">
                        <Image
                            src="/icons/email.png"
                            alt="email"
                            width={22}
                            height={22}
                            className="mr-2"
                        />
                        {contactInfo.email}
                    </p>
                </div>
                <div className="font-sans max-w-7xl mx-auto pt-10 pb-4">
                    <div className="bg-[#2B2B2B] shadow-lg rounded-lg py-8 px-12"> {/* #2a2929 */}
                        <div className="grid lg:grid-cols-2 items-start gap-12">
                            <form className="space-y-3 text-gray-200">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-white rounded py-3 px-6 text-sm focus:outline-none focus:ring-1 focus:ring-[#8e9197] focus:border-transparent" // Updated focus ring color
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-white rounded py-3 px-6 text-sm focus:outline-none focus:ring-1 focus:ring-[#8e9197] focus:border-transparent" // Updated focus ring color
                                />
                                <input
                                    type="text"
                                    placeholder="Phone No."
                                    className="w-full bg-white rounded py-3 px-6 text-sm focus:outline-none focus:ring-1 focus:ring-[#8e9197] focus:border-transparent" // Updated focus ring color
                                />
                                <textarea
                                    placeholder="Message"
                                    rows={6}
                                    className="w-full bg-white rounded px-6 text-sm pt-3 focus:outline-none focus:ring-1 focus:ring-[#8e9197] focus:border-transparent" // Updated focus ring color
                                />
                                <button
                                    type="button"
                                    className="text-white bg-[#6B4C7C] hover:bg-[#4C3A61] rounded-full text-sm px-6 py-3 mt-12"
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
                                <p>Map will go here</p>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
