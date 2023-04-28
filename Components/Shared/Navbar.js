import Link from "next/link";
import logo from "../../public/Images/logo.png";
import profile from "../../public/Images/profile .png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import useCart from "@/Hooks/useCart";
const Navbar = () => {
  const [searchText,setSearchText] = useState()
  const [cart] = useCart()
  let price = 0;
  let shipping = 0;
  let quantity = 0;

  cart.forEach((product) => {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  });
  const router = useRouter()
  return (
    <div className="lg:sticky top-0 w-full z-10">
      {/* navbar */}
      <div className="navbar px-0 lg:px-10 flex justify-between bg-white">
        {/* logo */}
        <div className="cursor-pointer">
          <Link href="/">
            <Image src={logo} width="200" height="200"></Image>
          </Link>
        </div>
        {/* search bar */}
        <div className="form-control text-black hidden md:block lg:block">
          <div className="input-group">
            <select onChange={(e)=>setSearchText(e.target.value)} className="select border border-primary w-[600px] bg-white">
              <option selected>Pick category</option>
              <option>
                Boys Fashion
              </option>
              <option>
                Girls Fashion
              </option>
              <option>
                Household Items
              </option>
              <option>
                Computer Accessories
              </option>
              <option>
                Gadgets
              </option>
              <option>
                Jewellery
              </option>
              <option>
                Home decoration
              </option>
              <option>
                Cosmetics
              </option>
            </select>
            <button onClick={()=>router.push(searchText?.replace(/\s+/g, ""))} className="btn btn-square bg-primary hover:text-black hover:bg-accent border border-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-none">
        {/* cart icon */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge bg-accent text-primary font-bold border-none badge-md text-lg indicator-item">
                  {quantity}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body border border-accent rounded-box">
                <span className="font-bold text-lg text-black">{quantity} Items</span>
                <span className="text-accent font-bold">
                  Subtotal: ${price + shipping}
                </span>
                <div className="card-actions">
                  <button onClick={()=>router.push("/cart")} className="btn btn-primary btn-block text-white">
                    <Link href="/cart">View cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* profile icon */}
          <div className="dropdown dropdown-end text-black">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={profile}></Image>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu border border-accent menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between hover:text-accent hover:font-bold">
                  Profile
                </a>
              </li>
              <li>
                <a className="hover:text-accent hover:font-bold">View Cart</a>
              </li>
              <li>
                <a className="hover:text-accent hover:font-bold">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* nav menu */}
      <div className="nav-menu text-center py-4 text-white bg-primary">
        <Link className="mr-10 hover:text-accent font-bold" href="/BoysFashion">
          {" "}
          Boy's Fashion{" "}
        </Link>
        <Link className="mr-10 hover:text-accent font-bold" href="/GirlsFashion">
          {" "}
          Girl's Fashion{" "}
        </Link>
        <Link className="mr-10 hover:text-accent font-bold" href="/HouseholdItems">
          {" "}
          Household Items{" "}
        </Link>
        <Link className="mr-10 hover:text-accent font-bold" href="/ComputerAccessories">
          {" "}
          Computer Accessories
        </Link>
        <Link className="mr-10 hover:text-accent font-bold" href="/Gadgets">
          {" "}
          Gadgets{" "}
        </Link>
        <Link className="mr-10 hover:text-accent font-bold" href="/Jewellery">
          {" "}
          Jewellery
        </Link>
        <Link className="mr-10 hover:text-accent font-bold" href="/HomeDecoration">
          {" "}
          Home Decoration
        </Link>
        <Link className="mr-10 hover:text-accent font-bold" href="/Cosmetics">
          {" "}
          Cosmetics
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
