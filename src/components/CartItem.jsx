import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  user,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(user.uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addOrUpdateToCart(user.uid, { ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeFromCart(user.uid, id);
  };

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p>{title}</p>
          <p>{option}</p>
          <p>{price}</p>
        </div>
        <div className="flex text-2xl items-center gap-2">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}