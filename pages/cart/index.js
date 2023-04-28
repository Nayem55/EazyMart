import CartProduct from "@/Components/CartProduct";
import useCart from "@/Hooks/useCart";
import style from '../../styles/Cart.module.css'

const Cart = () => {
  const [cart,loadCart] = useCart();
  let price = 0;
  let shipping = 0;
  let quantity = 0;

  cart.forEach((product) => {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  });

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
          <p>Total Quantity : <span className="text-accent font-bold">${quantity}</span></p>
          <p>Total Price :<span className="text-accent font-bold"> ${price}</span></p>
          <p>Shipping Price : <span className="text-accent font-bold"> ${shipping}</span></p>
          <p>Subtotal : <span className="text-accent font-bold">${price + shipping}</span></p>
        </div>
        <button className="btn btn-primary mt-10 text-white btn-block hover:bg-accent border-none">
          Proceed & checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
