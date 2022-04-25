import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestion: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestion: $createUseditemQuestion
      useditemId: $useditemId
    ) {
      _id
      contents
      user
      createdAt
    }
  }
`;

export const DELETE_USED_ITEM_QUESTION = gql`
  qeury deleteUseditemQuestion(
    $useditemQuestionId: ID!
  ) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
