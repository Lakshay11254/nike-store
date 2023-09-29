import PopularProductCard from "../component/PopularProductCard";
import { products } from "../constants";
const PopularProduct = () => {
  return (
    <div>
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-4xl font-bold font-palanquin">
            Our <span className="text-coral-red">Popular </span>Products
          </h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
            blanditiis itaque! Delectus, natus cupiditate! Beatae nihil,
            nesciunt dolore soluta facere aliquam fugiat voluptates voluptatum
            et voluptas! Exercitationem omnis doloribus cupiditate.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product) => (
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularProduct;
