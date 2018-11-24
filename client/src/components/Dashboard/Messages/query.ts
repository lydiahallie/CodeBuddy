import gql from 'graphql-tag';

export default gql`
  query Messages($id: ID!) {
    messages(id: $id) {
      author {
        id
        firstName
        lastName
        profile {
          img
        }
      }
      recipientUserId
      body
    }       
  }
`;
