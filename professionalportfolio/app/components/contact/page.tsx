'use client';

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "@/lib/firebaseConfig";
import { GoogleMapsEmbed } from '@next/third-parties/google';

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
                } else if (!/^[a-zA-Z\s]+$/.test(value)) {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (
            validateForm("name", formData.name) &&
            validateForm("email", formData.email) &&
            validateForm("message", formData.message)
        ) {
            try {
                await addDoc(collection(db, "contacts"), {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    timestamp: new Date(),
                });

                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
                setErrors({ name: "", email: "", message: "" });

                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    };

    const isFormValid = !errors.name && !errors.email && !errors.message && formData.name && formData.email && formData.message;

    const mapComponent = useMemo(() => (
        <GoogleMapsEmbed
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}
            height={500}
            width="100%"
            mode="place"
            q={contactInfo.address || ''}
        />
    ), [contactInfo.address]);

    return (
        <div id="contact" className="bg-gradient-to-b from-[#3d3d3d] to-[#1d1d1d] py-10 px-8 lg:px-24">
            <div className="font-sans mx-auto flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2">
                    <div className="shadow-lg rounded-lg py-4 px-2 lg:px-12">
                        <h1 className="text-white text-4xl font-bold mb-6">CONTACT ME</h1>
                        <p className="text-white text-md mb-4">Feel free to contact me by submitting the form below, sending me an email, or connecting with me via LinkedIn:</p>
                        <div className="font-medium mt-2 text-white flex flex-col lg:flex-row items-start lg:items-center">
                            <div className="flex items-center mb-4 lg:mb-0">
                                <Image
                                    src="/icons/email.png"
                                    alt="email" 
                                    width={22}
                                    height={22}
                                    className="mr-2"
                                />
                                {contactInfo.email}
                            </div>
                            <a href="https://www.linkedin.com/in/vanessa-yngrid-chuquitaipe-vargas/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="lg:ml-6 flex items-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="h-6 w-6">
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                                <span className="text-white pl-2 lg:inline text-start">LinkedIn</span>
                            </a>
                        </div>

                        <form className="space-y-4 text-black mt-8" onSubmit={handleSubmit}>
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
                                disabled={!isFormValid}
                                className={`text-white bg-[#6B4C7C] hover:bg-[#4C3A61] rounded-full text-sm px-6 py-3 mt-12 ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-between px-2 lg:px-8">
                    <div className="w-full" style={{ height: 'auto', minHeight: '500px' }}>
                        {mapComponent}
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
