import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { addOrUpdateToCart, getCart, removeFromCart } from "../api/firebase";
import { userState } from "../store/index";

export default function useCart() {
  const [user, setUser] = useRecoilState(userState);
  const queryClient = useQueryClient();

  const cartQuery = useQuery(
    ["carts", user.uid || ""],
    () => getCart(user.uid),
    {
      enabled: !!user.uid,
    }
  );

  const addOrUpdateItem = useMutation(
    (product) => addOrUpdateToCart(user.uid, product),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", user.uid]);
      },
    }
  );

  const removeItem = useMutation((id) => removeFromCart(user.uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(["carts", user.uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
