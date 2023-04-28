import Product from "@/Components/Product";
import useProduct from "@/Hooks/useProduct";

const homeDecoration = () => {
    const [products] = useProduct();
    const homedecorations = products.filter(product=> product.category==="Home Decoration");
    return (
        <div>
            <div>
        <h1 className="text-primary text-center text-4xl my-10 font-bold">
          Home Decoration
        </h1>
        <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
          {homedecorations.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>
        </div>
    );
}

export default homeDecoration