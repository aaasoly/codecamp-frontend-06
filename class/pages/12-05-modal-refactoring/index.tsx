import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalCustomPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // const showModal = () => {
  //   setIsOpen((prev) => !prev); // 기존값 false 를 true 로 바꿔줌
  // };

  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };
  // 확인버튼 클릭시 주소에 대한 데이터 들어옴
  const handleComplete = (data: any) => {
    console.log(data);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={onToggleModal}>Open Modal</Button>
      {/* 모달 삭제하고 새로 만드는 방법 */}
      {isOpen && ( // isOpen이 true 면 Modal 보여줌
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
