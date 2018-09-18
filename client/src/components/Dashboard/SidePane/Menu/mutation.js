import gql from 'graphql-tag';

export default gql`
  mutation Logout {
    logout {
      id
    }
  }
`;
