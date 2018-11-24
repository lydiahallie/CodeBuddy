import gql from 'graphql-tag';

export default gql`
  query UserProfile($id: ID!)  {
    user(id: $id) {
      id
      email
      firstName
      lastName
      gender
      profile {
        userName
        img
        title
        skills {
          lang
          value
        }
        level
        description
        complete
      }
    }
  }
`;

