import React from "react";
import { useRecoilState } from "recoil";
import { priceState, userState } from "../store/index";
import CartItem from "../components/CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "../components/ui/PriceCard";
import Button from "../components/ui/Button";
import useCart from "../hooks/useCart";
import usePayment from "../hooks/usePayment";

const SHIPPING = 3000;

export default function MyCart() {
  const [user, setUser] = useRecoilState(userState);
  const { onClickPayment } = usePayment();
  const [price, setPrice] = useRecoilState(priceState);

  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce((acc, cur) => acc + parseInt(cur.price) * cur.quantity, 0);

  const handlePayMent = () => {
    setPrice(totalPrice + SHIPPING);
    onClickPayment();
  };

  return (
    <section className="p-8 flex flex-col">
      <h1 className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니
      </h1>
      {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
      {hasProducts && (
        <>
          <ul className="border-b border-gray-300 mb-8 p-4 px-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} user={user} />
              ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송액" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
          </div>
          <Button text="주문하기" onClick={handlePayMent} />
        </>
      )}
    </section>
  );
}
