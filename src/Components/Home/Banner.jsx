import image from "../../assets/image/banner-image.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#FFB400] text-white">
      <div className="max-w-md">
        <h1 className="text-5xl mb-10 font-semibold">Find Your Furry Friend</h1>
        <p>
          Step Into a Haven of Hope and Happiness, Where Unconditional Love
          Blossoms, Creating Lifelong Bonds and Cherished Memories for Every
          Adopter and Beloved Pet
        </p>
      </div>
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default Banner;
