import gql from 'graphql-tag';

export default gql`
  {
    users {
      id
      email 
      firstName
      lastName
      profile {
        img
        title
        skills {
          lang
          value
        }
        level
        description
      }
    }
  }
`;
