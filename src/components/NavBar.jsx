import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { login, logout, onUserStateChange } from "../api/firebase";
import { useRecoilState } from "recoil";
import { userState } from "../store/index";
import { BsFillPencilFill } from "react-icons/bs";
import User from "./User";
import Button from "../components/ui/Button";
import CartStatus from "./CartStatus";

export default function NavBar() {
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    onUserStateChange((user) => setUser(user));
  }, [setUser]);

  const navigate = useNavigate();
  const onClickLogout = () => {
    logout();
    navigate("/products");
  };

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex text-4xl text-brand">
        <HiOutlineShoppingBag />
        <h1 className="text-brand">Shop</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts">
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button onClick={login} text={"로그인"} />}
        {user && <Button onClick={onClickLogout} text={"로그아웃"} />}
      </nav>
    </header>
  );
}
