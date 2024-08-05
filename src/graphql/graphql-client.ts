import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.HYGRAPH_CONTENT_API_ENDPOINT ?? '';

const graphqlClient = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
});

export default graphqlClient;
