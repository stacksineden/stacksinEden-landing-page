import { shortenString } from "../uitils";
import EinsteinLogo from "./../assets/text-brand.png";

const productsData = [
  {
    product_name: "EinsteinAI",
    description:
      "EinsteinAI is a SaaS platform that utilizes cutting-edge AI technology to provide smart assistance. Users can train AI assistants based on custom knowledge and specialized functions in various categories. The platform offers pre-trained assistants and allows users to customize them for specific use cases",
    image: EinsteinLogo,
    url: "einsteinai.com",
  },
];

const Stories = () => {
  return (
    <>
      <div className="w-full my-7 hidden md:flex flex-col gap-9 px-20 py-5">
        {productsData &&
          productsData?.map((product, _i) => (
            <div
              className="w-full h-[450px] shadow-xl grid grid-cols-2 rounded-[2rem]"
              key={_i}
            >
              <div className="w-full bg-[#071E22] h-full rounded-l-[2rem] py-5 px-7 text-white relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[88%]">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-[28px] font-semibold">
                      {product?.product_name}
                    </h2>
                    <p className="text-[14px] font-light tracking-wide">
                      {product.description}
                    </p>
                    <div className="flex justify-start mt-2">
                      <button
                        className="text-[12px] md:text-[14px] text-[#071E22] cursor-pointer tracking-tight font-semibold bg-white px-4 md:px-4 py-2 md:py-2 active:scale-90 rounded-full border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
                        onClick={() => {}}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white h-full rounded-r-[2rem] flex items-center justify-center px-3">
                <img
                  src={product?.image}
                  alt="image-services"
                  className="bg-contain rounded-r-[2rem]"
                />
              </div>
            </div>
          ))}
      </div>
      <div className="w-full my-7 flex flex-col gap-9 py-5 md:hidden">
        {productsData &&
          productsData?.map((product, _i) => (
            <div
              className="w-full h-[500px] shadow-xl grid grid-cols-1 rounded-[2rem]"
              key={_i}
            >
              <div className="w-full bg-white h-[250px] rounded-t-[2rem] flex items-center justify-center px-3">
                <img
                  src={product?.image}
                  alt="image-services"
                  className="bg-contain rounded-t-[2rem]"
                />
              </div>
              <div className="w-full bg-[#071E22] h-[250px] py-5 px-7 text-white rounded-b-[2rem]">
                <div className="w-full">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[18px] font-semibold">
                      {product?.product_name}
                    </h2>
                    <p className="text-[12px] font-light tracking-wide">
                      {shortenString(product?.description, 180)}
                    </p>
                    <div className="flex justify-start mt-2">
                      <button
                        className="text-[12px] md:text-[14px] text-[#071E22] cursor-pointer tracking-tight font-semibold bg-white px-3 py-1 active:scale-90 rounded-full border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
                        onClick={() => {}}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Stories;
