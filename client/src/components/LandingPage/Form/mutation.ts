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
  mutation Signup($firstName: String! $lastName: String! $email: String! $password: String!) {
    signup(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      email
    }
  }
`;
