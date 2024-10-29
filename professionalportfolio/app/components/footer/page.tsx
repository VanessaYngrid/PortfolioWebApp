import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#1C1C1C] text-white text-center text-xs pt-4 py-6 overflow-x-hidden border border-t border-x-0 border-[#6B4C7C]">
            <p>{`© Copyright ${year}. Made by Vanessa Yngrid Chuquitaipe Vargas.`}</p>
        </footer>
    );
}