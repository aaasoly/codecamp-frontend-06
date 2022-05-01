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

export const useditemAddressState = atom({
  key: "useditemAddressState",
  default: "",
});

export const getLatState = atom({
  key: "getLatState",
  default: "",
});

export const getLngState = atom({
  key: "getLngState",
  default: "",
});

// export const getLatLngState = atom({
//   key: "getLatLngState",
//   default: {
//     La: "",
//     Ma: "",
//   },
// });
