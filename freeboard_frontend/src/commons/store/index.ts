import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

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

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

// export const getLatLngState = atom({
//   key: "getLatLngState",
//   default: {
//     La: "",
//     Ma: "",
//   },
// });

export const basketCountState = atom({
  key: "basketCountState",
  default: 0,
});

export const basketItemState = atom({
  key: "basketItemState",
  default: [],
});

export const recentItemState = atom({
  key: "recentItemState",
  default: [],
});
