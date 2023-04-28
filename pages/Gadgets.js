import Product from "@/Components/Product";
import useProduct from "@/Hooks/useProduct";

const gadgets = () => {
    const [products] = useProduct();
  const Gadgets = products.filter((product) => product.category === "Gadgets");
  return (
    <div>
      <div>
        <h1 className="text-primary text-center text-4xl my-10 font-bold">
          Gadgets
        </h1>
        <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
          {Gadgets.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}

export default gadgets