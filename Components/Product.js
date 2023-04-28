import useCart from "@/Hooks/useCart";
import { toast } from "react-hot-toast";

const Product = ({product}) => {
  const [cart] = useCart()
  const addToCart =(product)=>{
      fetch('http://localhost:3000/api/cart',{
        method: "POST",
        body: JSON.stringify({product}),
        headers:{
          "content-type": "application/json"
        }
      })
      toast.success("Product added to the cart")
      window.location.reload();
  }
  return (
   <div>
    <div className="m-10 text-black bg-white p-[10px] w-[220px] overflow-hidden">
      <div className="w-[190px] h-[210px] hover:w-[200px] mx-auto transition-all ease-in-out">
        <img className="mb-3" src={product?.img} alt="" />
      </div>
      <p title={product?.name}>
        {product?.name.length > 20
          ? `${product.name.slice(0, 20)}...`
          : product?.name}
      </p>
      <p>{product?.type}</p>
        <p className="mr-4 text-accent font-bold">${product?.price}</p>
      <div className="flex justify-between mt-2 ">
        <button
          onClick={() => addToCart(product)}
          className="btn btn-xs bg-primary hover:bg-accent text-white border-none"
        >
          Add To Cart
        </button>
        <button className="btn btn-xs bg-primary hover:bg-accent text-white border-none">
          Order Now
        </button>
      </div>
    </div>
   </div>
  );
};

export default Product;
