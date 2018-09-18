import gql from 'graphql-tag';

export const profileQuery = gql`
  {
    user {
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

export const messagesQuery = gql`
  {
    messages  {
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
      }
      post {
        title 
        body
        date
      }
    }
  }
`;
