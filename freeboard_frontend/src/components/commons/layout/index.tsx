import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

// const BodyWrapper = styled.div`
//   display: flex;
// `;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HIDDEN_HEADERS = ["/"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenHeader && <LayoutBanner />}
      {!isHiddenHeader && <LayoutNavigation />}
      <Body>{props.children}</Body>
      {!isHiddenHeader && <LayoutFooter />}
    </>
  );
}
