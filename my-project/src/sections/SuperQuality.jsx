import { arrowRight } from "../assets/icons";
import { shoe7 } from "../assets/images";
import Button from "../component/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        {/* <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p> */}

        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-gl">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="lg:max-w-lg mt-4 info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
          blanditiis itaque! Delectus, natus cupiditate! Beatae nihil, nesciunt
          dolore soluta facere aliquam fugiat voluptates voluptatum et voluptas!
          Exercitationem omnis doloribus cupiditate.
        </p>
        <p className="lg:max-w-lg mt-6 info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          placeat, laborum adipisci nobis dolorum quibusdam cum itaque possimus
          est porro!
        </p>
        <div className="mt-11">
          <Button label="Shop now" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe7}
          alt="shoe7"
          width={570}
          height={522}
          className="objext-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
