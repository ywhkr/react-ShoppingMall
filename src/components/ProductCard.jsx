import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <li
      className="rounded-lg shadow-md overflow-hidden transition-all hover:scale-105 cursor-pointer"
      onClick={() => {
        navigate(`/products/${id}`, { state: { product } });
      }}
    >
      <img className="w-full h-[350px]" src={image} alt={title} />
      <h3 className="px-2 truncate">{title}</h3>
      <div className="mt-2 px-2 text-lg flex justify-between items-center">
        <p>{`${price}원`}</p>
        <p className=" px-2 text-gray-600">{category}</p>
      </div>
    </li>
  );
}
