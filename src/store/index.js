import { atom } from "recoil";
import { v4 as uuid } from "uuid";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: `userState/${uuid()}`,
  default: "",
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [persistAtom],
});

export const sortedState = atom({
  key: `sortedState/${uuid()}`,
  default: "",
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [persistAtom],
});

export const priceState = atom({
  key: `priceState/${uuid()}`,
  default: 0,
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [persistAtom],
});
