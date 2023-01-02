import { atom } from "recoil";
import { v4 as uuid } from "uuid";

export const userState = atom({
  key: `userState/${uuid()}`,
  default: "",
  dangerouslyAllowMutability: true,
});
