import HalfList from "@/components/half-list";
import client from "@/graphql/graphql-client";
import { GET_USER_GUIDES } from "@/graphql/home-book";
import { GetStaticProps } from 'next';
import { UserGuide } from "@/types/types";

export default function HomeBook({ userGuides }: { userGuides: UserGuide[] }) {
    return (
        <HalfList items={userGuides} />
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await client.request<{ userGuides: UserGuide[] }>(GET_USER_GUIDES);

    return {
        props: {
            userGuides: data.userGuides,
        },
    };
};
