import Product from "@/Components/Product";
import useProduct from "@/Hooks/useProduct";

const cosmetics = () => {
    const [products] = useProduct();
    const cosmetics = products.filter(
      (product) => product.category === "Cosmetics"
    );
    return (
      <div>
        <div>
          <h1 className="text-primary text-center text-4xl my-10 font-bold">
            Cosmetics
          </h1>
          <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
            {cosmetics.map((product) => (
              <Product product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    );
}

export default cosmetics