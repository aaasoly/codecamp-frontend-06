import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUsedItem($createUsedItemInput: CreateUsedItemInput!) {
    _id
    name
    contents
    price
    images
    createdAt
  }
`;
