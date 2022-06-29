import { useMutation, useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Sidebar from "../../components/commons/layout/sidebar";
import { FETCH_USER_LOGGED_IN } from "../login/Login.queries";

const Wrapper = styled.div`
  width: 1290px;
  min-height: 900px;
  display: flex;
  font-size: 16px;
`;

const Main = styled.div`
  width: 1000px;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const Title = styled.span`
  font-weight: 600;
`;

const Amount = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const ChargeBtn = styled.button`
  width: 190px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #bebebe;
  border-radius: 30px;
  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: #31588a;
    color: #feffe0;
    border: 1px solid #31588a;
  }
`;

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

export default function PaymentLoading() {
  const router = useRouter();
  const [amount, setAmount] = useState(0);

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClick500 = () => {
    setAmount(500);
  };

  const onClick1000 = () => {
    setAmount(1000);
  };

  const onClick2000 = () => {
    setAmount(2000);
  };

  const onClick5000 = () => {
    setAmount(5000);
  };

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: amount,
        buyer_email: data?.fetchUserLoggedIn.email,
        buyer_name: data?.fetchUserLoggedIn.name,
        // buyer_tel: "010-4242-4242",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        // m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          const result = createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          alert("결제에 성공했습니다!");
          console.log(result);
          router.push("myPage/myPoint");

          // };
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    );
  };

  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Head>
          <script
            type="text/javascript"
            src="https://code.jquery.com/jquery-1.12.4.min.js"
          ></script>
          <script
            type="text/javascript"
            src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
          ></script>
        </Head>
        <Title>충전하실 금액을 선택한 뒤 충전 버튼을 눌러주세요</Title>
        <Amount>
          <RadioInput type="radio" name="point" onClick={onClick500} />
          500
        </Amount>
        <Amount>
          <RadioInput type="radio" name="point" onClick={onClick1000} />
          1000
        </Amount>
        <Amount>
          <RadioInput type="radio" name="point" onClick={onClick2000} />
          2000
        </Amount>
        <Amount>
          <RadioInput type="radio" name="point" onClick={onClick5000} />
          5000
        </Amount>
        <ChargeBtn onClick={requestPay}>충전</ChargeBtn>
      </Main>
    </Wrapper>
  );
}
