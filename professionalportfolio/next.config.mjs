/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['flowbite.s3.amazonaws.com', 'via.placeholder.com', 'openweathermap.org',], // Add allowed domains here
    },
/*
    i18n: {
        locales: ['en-US', 'fr-CA'], // List your supported locales
        defaultLocale: 'en-US', // Set the default locale
    },
    */
};

export default nextConfig;
