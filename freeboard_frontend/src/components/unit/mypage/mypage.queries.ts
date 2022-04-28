import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTION_OF_LOADING = gql`
  mutation fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      amount
    }
  }
`;
