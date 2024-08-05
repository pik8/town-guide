import { gql } from 'graphql-request';
import { Contact, GQLRequest } from "@/types/types";

export const GET_CONTACTS = gql`
  query Contacts {
      contacts {
        id,
        name,
        institution,
        phoneNumber,
        email,
        picture {
          width,
          height,
          fileName,
          url,
        }
      }
}
`;