import { useQuery } from "@apollo/client";
import { gql } from "graphql-request";
import { useRouter } from "next/router";
import CreateUsedItem from "../../../src/components/unit/useditem/write/UsedItem.write.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      useditemAddress {
        zipcode
        address
        addressDetail
      }
      seller {
        _id
        email
        name
      }
    }
  }
`;

export default function UpdateuseditemPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  return <CreateUsedItem isEdit={true} data={data} />;
}
