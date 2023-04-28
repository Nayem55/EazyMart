import CartProduct from "@/Components/CartProduct";
import useCart from "@/Hooks/useCart";
import style from '../../styles/Cart.module.css'

const Cart = () => {
  const [cart,loadCart] = useCart();

  return (
    <div className={`${style.cart} grid bg-secondary`}>
      <div className="productDetails">
        {cart.map((item) => (
          <CartProduct loadCart={loadCart} item={item}></CartProduct>
        ))}
      </div>
      <div className={`${style.subtotal} text-black`}>
        <p className="text-center text-primary font-bold">Subtotal</p>
        <div className="mt-5">
          <p>Total Price : ${}</p>
          <p>Total Tax : ${}</p>
          <p>Shipping Price : ${}</p>
          <p>Subtotal : ${}</p>
        </div>
        <button className="btn btn-primary mt-10 text-white btn-block hover:bg-accent border-none">
          Proceed & checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
