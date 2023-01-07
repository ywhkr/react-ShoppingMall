import { useSetRecoilState } from "recoil";
import useProducts from "../hooks/useProducts";
import { sortedState } from "../store/index";

export default function useFilter() {
  const {
    productsQuery: { data: products },
  } = useProducts();

  const setSortedData = useSetRecoilState(sortedState);

  const AllFilter = () => {
    const newData = products;
    setSortedData(newData);
  };

  const highPriceFilter = () => {
    const newData = products.sort((a, b) => b.price - a.price);
    setSortedData(newData);
  };

  const lowPriceFilter = () => {
    const newData = products.sort((a, b) => a.price - b.price);
    setSortedData(newData);
  };

  return { highPriceFilter, lowPriceFilter, AllFilter, products };
}
