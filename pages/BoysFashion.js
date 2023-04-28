import Product from "@/Components/Product";
import useProduct from "../Hooks/useProduct";

const BoysFashion = () => {
    const [products] = useProduct();
    const boysfashion = products.filter(
      (product) => product.category === "Boy's Fashion"
    );
    return (
      <div>
      <h1 className="text-primary text-center text-4xl my-10 font-bold">Boy's Fashion</h1>
           <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
        {boysfashion.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      </div>
     
    );
}

export default BoysFashion;