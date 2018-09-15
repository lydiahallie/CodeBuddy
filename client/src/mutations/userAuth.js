import gql from 'graphql-tag';

export const login =  gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

export const logout = gql`
  mutation Logout {
    logout {
      id
      email
    }
  }
`;

export const signup = gql`
  mutation Login($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    login(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`;

