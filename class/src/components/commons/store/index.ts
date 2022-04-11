import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState", // key로 다른 데이터들을 구분한다
  default: false, // 초기값
});
// 어떤 컴포넌트에서도 뽑아 쓸 수 있는 global state
