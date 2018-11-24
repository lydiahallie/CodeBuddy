import gql from 'graphql-tag';

export const profileQuery = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      firstName 
      lastName 
      profile {
        title
        img
      }
    }
  }
`;

export const getMessages = gql`
  query Messages($id: ID!) {
    messages(id: $id) {
      id 
    }
  }
`;

export const postsQuery = gql`
  {
    posts {
      id 
      author {
        id
        firstName
        lastName
        profile {
          img
        }
      }
      post {
        body
        date
      }
    }
  }
`;
