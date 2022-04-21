import { useState } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  IMP: any; // 솔루션 회사에서 타입 값을 제공해주지 않는 한 우린 알 수 없다
};

export default function PaymentPage() {
  const [amount, setAmount] = useState(100);

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    // iamport 내정보의 가맹점 식별코드
    IMP.init("imp22434667"); // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card", // 가상계좌 vbank
        // merchant_uid: "ORD20180131-0000011", // 중복불가능, 생략시 임의로 발급
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // 백엔드에 결제 관련 데이터 넘겨주기
          // ex. createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해 주세요.");
        }
      }
    );
  };

  return (
    <div>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>

      <button onClick={requestPay}>결제하기</button>
    </div>
  );
}
