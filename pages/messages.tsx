import { GetStaticProps } from "next";
import client from "@/graphql/graphql-client";
import { GET_CONTACTS } from "@/graphql/contacts";
import { Contact, ContactsResponse } from "@/types/types";
import Image from 'next/image';

export default function Messages({ contacts }: { contacts: Contact[] }) {
    console.log(contacts);
    return (
        <>
            <h1 className="text-2xl text-gray-700 text-center mb-4">Feature is not available yet</h1>
            <p>In the meantime, you can reach any of us</p>
            <div className="flex" style={{ width: '100%', gap: '20px' }}>
                {contacts.map((contact) => {
                    return (
                        <div key={contact.id} className="relative flex flex-col text-gray-700 bg-sky-50 shadow-md bg-clip-border rounded-xl" style={{ width: '50%' }}>
                            {contact.picture && (
                                <div className="w-24 h-24 mb-3 rounded-full shadow-lg">
                                    <Image
                                        src={contact.picture.url}
                                        width={contact.picture.width}
                                        height={contact.picture.height}
                                        alt={`Picture of ${contact.name}`}
                                    />
                                </div>
                            )}
                            <p>{contact.name}</p>
                            <p>{contact.institution}</p>
                            <p>{contact.email}</p>
                            <p>{contact.phoneNumber}</p>
                        </div>
                    )
                })}
             </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await client.request<ContactsResponse>(GET_CONTACTS);

    return {
        props: {
            contacts: data.contacts,
        },
    };
};
