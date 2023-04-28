import Product from "@/Components/Product";
import useProduct from "@/Hooks/useProduct";

const houseHold = () => {
    const [products] = useProduct();
    const houseItems = products.filter(
      (product) => product.category === "Household Items"
    );
  
    return (
      <div>
        <div>
          <h1 className="text-primary text-center text-4xl my-10 font-bold">
            Household Items
          </h1>
          <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
            {houseItems.map((product) => (
              <Product product={product}></Product>
            ))}
          </div>
        </div>
      </div>
    );
}

export default houseHold