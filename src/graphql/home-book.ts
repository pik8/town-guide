import { gql } from 'graphql-request';

export const GET_USER_GUIDES = gql`
query UserGuides {
  userGuides {
    id
    title
    description
    instructions {
      html
      markdown
    }
    pictures {
      url
      fileName
      width
      height
    }
  }
}
`;
