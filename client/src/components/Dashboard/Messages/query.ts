import gql from 'graphql-tag';

export default gql`
  {
    messages {
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
