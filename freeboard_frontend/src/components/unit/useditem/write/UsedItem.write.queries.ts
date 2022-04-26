import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      seller {
        _id
        email
        name
      }
      createdAt
      usdeitemAddress {
        address
        addressDetail
      }
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!, $useditemId: ID!){
    updateUseditemInput(updateUseditemInput: $updateUseditemInput, useditemId: $$useditemId){
      _id
      name
      remarks
      contents
      price
      tags
      images
      usdeitemAddress{
        address
        addressDetail
      }
    }
  }
`;
