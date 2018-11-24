import gql from 'graphql-tag';

export default gql`
  mutation UpdateUser($email: String, $password: String, $firstName: String, $lastName: String) {
    updateUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`;
