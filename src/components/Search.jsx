import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState } from "recoil";
import useProducts from "../hooks/useProducts";
import { sortedState } from "../store";

export default function Search() {
  const [search, setSearch] = useState();
  const [sortedData, setSortedData] = useRecoilState(sortedState);

  const {
    productsQuery: { data: products },
  } = useProducts();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSortedData(
      products.filter((el) => el.title.toLowerCase().includes(search))
    );
    setSearch("");
  };

  return (
    <form className="relative flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={search}
        className="w-30 h-10"
      />
      <button className="absolute right-0 text-3xl">
        <AiOutlineSearch />
      </button>
    </form>
  );
}
