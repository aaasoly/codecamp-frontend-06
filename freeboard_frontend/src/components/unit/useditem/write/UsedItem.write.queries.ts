import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    name
    remarks
    contents
    price
    tags
    images
    seller
    createdAt
  }
`;
