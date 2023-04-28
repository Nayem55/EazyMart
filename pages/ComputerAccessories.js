import Product from "@/Components/Product";
import useProduct from "@/Hooks/useProduct";

const computers = () => {
  const [products] = useProduct();
  const computerItems = products.filter(
    (product) => product.category === "Computer Accessories"
  );

  return (
    <div>
      <div>
        <h1 className="text-primary text-center text-4xl my-10 font-bold">
          Computer Accessories
        </h1>
        <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
          {computerItems.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default computers;
