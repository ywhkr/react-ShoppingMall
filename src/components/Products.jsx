import React from "react";
import ProductCard from "./ProductCard";
import useFilter from "../hooks/useFilter";
import Button from "../components/ui/Button";
import { useRecoilValue } from "recoil";
import { sortedState } from "../store";

export default function Products() {
  const { highPriceFilter, lowPriceFilter, AllFilter, products } = useFilter();
  const sortedData = useRecoilValue(sortedState);

  return (
    <>
      <div className="m-4 flex gap-4">
        <Button text="모든 상품" onClick={AllFilter} />
        <Button text="높은 가격 순" onClick={highPriceFilter} />
        <Button text="낮은 가격 순" onClick={lowPriceFilter} />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {!sortedData &&
          products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {sortedData &&
          sortedData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
