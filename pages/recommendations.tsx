import HalfList from "@/components/half-list";
import { GET_RECOMMENDATIONS } from "@/graphql/recommendations";
import { GetStaticProps } from "next";
import client from "@/graphql/graphql-client";
import { IRecommendations, Recommendation, RecommendationsResponse } from "@/types/types";

export default function Recommendations({ recommendations }: { recommendations: Recommendation[] }) {
    return (
        <>
            <HalfList items={recommendations} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const data: IRecommendations = await client.request<RecommendationsResponse>(GET_RECOMMENDATIONS);

    return {
        props: {
            recommendations: data.recommendations,
        },
    };
};