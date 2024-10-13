import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className=" bg-slate-300 text-center text-xs mt-4 py-6 overflow-x-hidden">
            <p>{`© Copyright ${year}. Made by Vanessa Yngrid Chuquitaipe Vargas.`}</p>
        </footer>
    );
}