import styled from "@emotion/styled";
import { keyframes } from "styled-components";

const showModal = keyframes`
  0% {
		transform: scale(0);
	}
	60% {
		transform: scale(1.1);
	}
	80% {
		transform: scale(.95);
	}
	100% {
		transform: scale(1);
	}
`;

const HideModal = keyframes`
  0% {
		transform: scale(1);
	}
	20% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(0);
	}
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  background: #3f3f3f;
  color: #415868;
`;

const Modal = styled.div`
  position: absolute;
  width: 280px;
  height: 210px;
  top: 95px;
  left: 60px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 4px 8px 12px 0 rgba(0, 0, 0, 0.4);
  text-align: center;
  overflow: hidden;
  animation: showModal 0.7s ease-in-out;
`;

const CloseBtn = styled.div`
  position: absolute;
  height: 40px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f65656;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;

export default function CommonModal(props) {
  <Wrapper>
    <Modal>
      {props.children}
      <CloseBtn></CloseBtn>
    </Modal>
  </Wrapper>;
}
