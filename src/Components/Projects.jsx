import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/images/assets";
import SectionsHeader from "./SectionsHeader";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsToShow(3);
      } else if (width >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();

    window.addEventListener("resize", updateCardsToShow);

    //for cleanUp
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % projectsData.length;
    });
  };
  const pervProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className=" container   mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <SectionsHeader
        title="Projects"
        title2="Completed"
        content="Crafting Spaces, Building Legacies-Explore Our Portfolio"
      />
      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          className="p-2 bg-gray-200 rounded mr-2"
          aria-label="Prev Project"
          onClick={pervProject}
        >
          <img src={assets.left_arrow} alt="Prev" />
        </button>
        <button
          className="p-2 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* Project slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => {
            return (
              <div
                key={index}
                className="relative flex-shrink-0"
                style={{
                  width: `calc(100% / ${cardsToShow} - 2rem * ${
                    cardsToShow - 1
                  } / ${cardsToShow})`,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-14"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {project.price} <span>|</span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
