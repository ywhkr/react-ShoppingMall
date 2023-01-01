import { uuidv4 } from "@firebase/util";
import { atom } from "recoil";
import { v4 as uuid } from "uuid";

export const userState = atom({
  key: `userState/${uuidv4()}`,
  default: "",
  dangerouslyAllowMutability: true,
});
