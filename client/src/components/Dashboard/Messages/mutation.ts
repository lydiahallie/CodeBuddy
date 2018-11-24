import gql from 'graphql-tag';

export default gql`
  mutation CreateMessage($id: String, $message: String) {
    createMessage(id: $id, message: $message) {
      id
    }
  }
`;

