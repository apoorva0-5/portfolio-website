import React from "react";
import { IoTerminal } from "react-icons/io5";
import Card from "../card/Card";

const projectsData = [
  {
    id: 1,
    imageUrl: "/images/image.ico",
    title: "OptiHealth Cuisine",
    description:
      "Pretty helpful if you are allergic to any food that has high nutrient profile",
  },

  {
    id: 2,
    imageUrl: "/images/image2.jpg",
    title: "Hand Sign Language Detection Tool",
    description:
      "A Machine Learning Model based on Computer Vision, made using TensorFlow",
  },
];

const Project = () => {
  return (
    <div className="flex flex-col lg:px-80 gap-3 bg-black">
      <div className="flex gap-3 ">
        <IoTerminal className="text-3xl" />
        <h1 className="text-xl font-bold">Featured Projects</h1>
      </div>
      <div>
        <p className="text-gray-400">
          A collection of some projects that have been completed recently.
        </p>

        <div>
          {projectsData.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
