import { NextResponse } from "next/server";

export async function GET() {
    
    // Define the TypeScript type for contact info
    type ContactInfo = {
        contact_id: string;
        email: string;
        address: string;
    };

    // Create a ContactInfo object
    const contactInfoObject: ContactInfo = {
        contact_id: "c001",
        email: "vanessa.yngrid96@gmail.com",
        address: "Montreal, Canada",
    };

    // Return the JSON response
    return NextResponse.json(contactInfoObject, { status: 200 });
}
