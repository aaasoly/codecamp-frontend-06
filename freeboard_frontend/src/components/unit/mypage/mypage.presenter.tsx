import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import PaymentLoading from "../../../commons/loading";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/Login.queries";

export default function MyPageUI() {
  const router = useRouter();
  const [amount, setAmount] = useState();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <div>
      <PaymentLoading />
      <div>충전된 포인트: {data?.fetchUserLoggedIn.userPoint.amount}</div>
    </div>
  );
}
