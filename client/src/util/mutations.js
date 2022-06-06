import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`
export const CREATE_POST = gql`
mutation CreatePost($title: String!, $description: String!) {
  createPost(title: $title, description: $description) {
    title
    description
  }
}`;
