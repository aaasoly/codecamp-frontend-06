import { gql } from "@apollo/client";

const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    _id
    name
    contents
    price
    images
    createdAt
  }
`;
