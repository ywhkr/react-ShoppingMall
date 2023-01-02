import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { addOrUpdateToCart } from "../api/firebase";
import Button from "../components/ui/Button";
import { userState } from "../store/index";

export default function ProductDetail() {
  const [user, setUser] = useRecoilState(userState);
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = (e) => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateToCart(user.uid, product);
  };

  return (
    <>
      <p className="mx-12 mt-4 bg-brand w-20 text-center rounded-md font-bold text-white">
        {category}
      </p>
      <section className="flex flex-col md:flex-row p-4">
        <img className="w-full px-4 basis-7/12" src={image} alt={title} />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-3xl font-bold py-2">{title}</h2>
          <p className="text-2xl font-bold py-2 border-b border-gray-400">
            {price}원
          </p>
          <p className="py-4 text-lg">{description}</p>
          <div className="flex items-center">
            <label className="text-brand font-bold" htmlFor="select">
              옵션:
            </label>
            <select
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              id="select"
              onChange={handleSelect}
              value={selected}
            >
              {options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <Button text="장바구니 추가" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
