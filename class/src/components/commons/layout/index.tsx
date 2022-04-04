import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const BodyWrapper = styled.div`
  display: flex;
`;

const Body = styled.div`
  width: 500px;
  height: 500px;
`;

const LayoutSidebar = styled.div`
  width: 100px;
  height: 500px;
  background-color: orange;
`;

const HIDDEN_HEADERS = [
  "/12-05-modal-refactoring",
  // ...헤더를 숨기고 싶은 곳의 주소
  // ...
  // ...
];

interface ILayoutProps {
  children: ReactNode; // 리액트에서 제공
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter(); // 주소 받아오기
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath); // router.asPath = 현재 주소

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}{" "}
      {/* isHidden이 false 일 때만 보여줌 */}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>여기는 사이드바 입니다</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </>
  );
}
