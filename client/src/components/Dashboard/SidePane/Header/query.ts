import gql from 'graphql-tag';

export default gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      profile {
        img
      }
    }
  }
`;

