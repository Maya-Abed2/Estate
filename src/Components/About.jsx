import { assets } from "../assets/images/assets";
import SectionsHeader from "./SectionsHeader";
export default function About() {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <SectionsHeader title="About" title2 = "Our Brand" content="Passionate About Properties, Dedicated to your Vision"/>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="brand_Image"
          className="w-full sm:w-1/2 max-w-lg"
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800 ">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 ">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 ">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800 ">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            voluptatem et impedit fugiat maxime enim, corporis possimus saepe ab
            neque quo minima dolorem aliquid nulla esse quod, necessitatibus
            inventore. Nam voluptatem et impedit fugiat maxime enim, corporis
            possimus saepe ab neque quo minima.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
