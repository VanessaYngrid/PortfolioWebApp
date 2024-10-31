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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);


    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contactinfo`, { cache: "no-cache" })
            .then((res) => res.json())
            .then((data) => {
                setContactInfo(data);
            });
    }, []);

    const validateForm = (fieldName: string, value: string) => {
        let valid = true;
        const newErrors = { ...errors };

        switch (fieldName) {
            case "name":
                if (!value) {
                    newErrors.name = "Name is required.";
                    valid = false;
                } else if (!/^[a-zA-Z]+$/.test(value)) {
                    newErrors.name = "Name must contain only letters.";
                    valid = false;
                } else if (value.length < 2 || value.length > 50) {
                    newErrors.name = "Name must be between 2 and 50 characters.";
                    valid = false;
                } else {
                    newErrors.name = ""; // Clear error if valid
                }
                break;

            case "email":
                if (!value) {
                    newErrors.email = "Email is required.";
                    valid = false;
                } else if (!/^\S+@\S+\.\S+$/.test(value)) {
                    newErrors.email = "Email must be in the format user@example.com.";
                    valid = false;
                } else {
                    newErrors.email = ""; // Clear error if valid
                }
                break;

            case "message":
                if (!value) {
                    newErrors.message = "Message is required.";
                    valid = false;
                } else if (value.length < 10 || value.length > 500) {
                    newErrors.message = "Message must be between 10 and 500 characters.";
                    valid = false;
                } else {
                    newErrors.message = ""; // Clear error if valid
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateForm(name, value); // Validate on change
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm("name", formData.name) && validateForm("email", formData.email) && validateForm("message", formData.message)) {
            // Submit form data
            setIsSubmitted(true);
            // Reset form and errors
            setFormData({ name: "", email: "", message: "" });
            setErrors({ name: "", email: "", message: "" });

            // Hide the popup after 3 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }
    };

    return (
        <div className="bg-gradient-to-b from-[#3d3d3d] to-[#1d1d1d] py-10">
            <div>
                <div className="text-center">
                    <h1 className="text-white text-4xl font-bold">CONTACT ME</h1>
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
                    <div className=" shadow-lg rounded-lg py-8 px-12"> {/* #2a2929 */}
                        <div className="grid lg:grid-cols-2 items-start gap-12">
                            <form className="space-y-4 text-black" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full bg-white rounded py-3 px-6 text-sm focus:outline-none focus:ring-1 focus:ring-[#8e9197] focus:border-transparent"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full bg-white rounded py-3 px-6 text-sm focus:outline-none focus:ring-1 focus:ring-[#8e9197] focus:border-transparent" 
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={6}
                                    className="w-full bg-white rounded px-6 text-sm pt-3 focus:outline-none focus:ring-1 focus:ring-[#8e9197] focus:border-transparent"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                <button
                                    type="submit"
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
            {isSubmitted && (
                <div className="fixed bottom-10 right-10 bg-green-500 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300">
                    Your message has been sent!
                </div>
            )}
        </div>
    );
}
