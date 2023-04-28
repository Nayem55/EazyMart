import Banner from "@/Components/Banner";
import Product from "../../Components/Product";
import useProduct from "../../Hooks/useProduct";

const Home = () => {
  const [products] = useProduct();
  console.log(products.length)
  const boysfashion = products.filter(product=> product.category==="Boy's Fashion").slice(2,12);
  const girlsfashion = products.filter(product=> product.category==="Girl's Fashion").slice(2,12);
  const houseItems = products.filter(product=> product.category==="Household Items").slice(0,10);
  const computerItems = products.filter(product=> product.category==="Computer Accessories").slice(0,10);
  const Gadgets = products.filter(product=> product.category==="Gadgets").slice(8,18);
  const jewelry = products.filter(product=> product.category==="Jewelry").slice(0,10);
  const homedecorations = products.filter(product=> product.category==="Home Decoration").slice(0,10);
  const cosmetics = products.filter(product=> product.category==="Cosmetics").slice(0,10);
  return (
    <div>
        <Banner></Banner>
    <div>
      <p className="text-primary font-bold mb-4 text-2xl mt-6 text-center">
        Boy's Fashion
      </p>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px] ">
      {
          boysfashion.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>

    <div>
      <p className="text-primary font-bold mb-4 text-2xl mt-6 text-center">
        Girl's Fashion
      </p>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
      {
          girlsfashion.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>

    <div>
      <p className="text-primary font-bold mb-4 text-2xl mt-6 text-center">
        Household Items
      </p>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
      {
          houseItems.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>

    <div>
      <p className="text-primary font-bold mb-4 text-2xl mt-6 text-center">
        Computer Accessories
      </p>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
      {
          computerItems.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>

    <div>
      <p className="text-primary font-bold mb-4 text-2xl mt-6 text-center">
        Gadgets
      </p>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
      {
          Gadgets.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>

    <div>
      <p className="text-primary font-bold mb-4 text-2xl mt-6 text-center">
        Jewellery
      </p>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
      {
          jewelry.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>

    <div>
      <p className="text-primary font-bold mb-4 text-2xl mt-6 text-center">
        Home Decoration
      </p>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
      {
          homedecorations.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>

    <div>
      <p className="text-primary font-bold mb-4 text-2xl mt-6 text-center">
        Cosmetics
      </p>
      <div className="bg-secondary flex flex-wrap justify-center p-[20px]">
      {
          cosmetics.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>

  </div>
  );
};

export default Home;
