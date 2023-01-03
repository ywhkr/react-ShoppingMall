import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts, addNewProduct, removeProduct } from "../api/firebase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(["products"], getProducts, {
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation(
    ({ product, url }) => addNewProduct(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  const deleteProduct = useMutation((productId) => removeProduct(productId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  return { productsQuery, addProduct, deleteProduct };
}
