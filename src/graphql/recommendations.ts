import { gql } from 'graphql-request';

export const GET_RECOMMENDATIONS = gql`
query Recommendations {
  recommendations {
    id,
    title,
    category,
    description {
      html,
      markdown
    },
    location {
      latitude,
      longitude
    },
    pictures {
      width,
      height,
      fileName,
      url
    }
  }
}
`;