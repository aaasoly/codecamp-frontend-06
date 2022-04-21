import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const UserInfoState = atom({
  key: "UserInfoState",
  default: {
    email: "",
    name: "",
  },
});
