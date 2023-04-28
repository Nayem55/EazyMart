import Product from "@/Components/Product";
import useProduct from "@/Hooks/useProduct";

const jewellery = () => {
  const [products] = useProduct();
  const jewelry = products.filter((product) => product.category === "Jewelry");
  return (
    <div>
      <div>
        <h1 className="text-primary text-center text-4xl my-10 font-bold">
          Jewellery
        </h1>
        <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
          {jewelry.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default jewellery;
