import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../src/components/commons/store";
import GlobalStateContainer from "../../src/components/unit/board/21-global-state/BoardWrite.container";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);
  // 그려지고 나서 isEdit를 true로 변경
  // global state 에서 사용하고 있기 때문에 모든 isEdit의 값 변경

  return <GlobalStateContainer />;
}
