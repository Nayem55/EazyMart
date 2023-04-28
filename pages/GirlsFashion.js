import Product from "@/Components/Product";
import useProduct from "@/Hooks/useProduct";

const girlsFashion = () => {
    const [products] = useProduct();
  const girlsfashion = products.filter(
    (product) => product.category === "Girl's Fashion"
  );
  return (
    <div>
      <h1 className="text-primary text-center text-4xl my-10 font-bold">
        Girl's Fashion
      </h1>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
        {girlsfashion.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  )
}

export default girlsFashion