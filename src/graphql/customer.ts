import { gql } from 'graphql-request';

export const GET_CUSTOMER = gql`
  query Customer {
    customers(where: {isCurrent: true}) {
      name
    }
  }
`;