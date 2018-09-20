import gql from 'graphql-tag';

export const loginMutation =  gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

export const logoutMutation = gql`
  mutation Logout {
    logout {
      id
      email
    }
  }
`;

export const signupMutation = gql`
  mutation Signup($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    signup(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`;
