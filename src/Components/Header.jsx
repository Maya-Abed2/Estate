
import Navbar from "./Navbar";
import headerImage from '../assets/images/header_img.png'; 
const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage:  `url(${headerImage})` }}
      id="header"
    >
      <Navbar/>
      <div className="container text-center mx-auto px-6 py-4 md:px-30 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-[Outfit]">Explore homes that fit your dreams</h2>
        <div className="text space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">Projects</a>
          <a href="#Contact" className="bg-blue-500 px-8 py-3 rounded">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
