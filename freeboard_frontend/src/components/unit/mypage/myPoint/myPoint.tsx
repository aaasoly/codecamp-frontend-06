import * as MyItem from "./myPoint.styles";
import Sidebar from "../../../commons/layout/sidebar";
import PaymentLoading from "../../../../commons/loading";

export default function MyPointPage() {
  return (
    <MyItem.Wrapper>
      <Sidebar />
      <MyItem.Main>
        <PaymentLoading />
      </MyItem.Main>
    </MyItem.Wrapper>
  );
}
