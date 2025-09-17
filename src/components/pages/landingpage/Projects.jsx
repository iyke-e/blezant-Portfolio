import React from "react";
import project2 from "../../../assets/project2.jpg";
import project1 from "../../../assets/project1.webp";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="project" className={"section-inline mt-8 scroll-mt-12"}>
      <h2 className={"mb-4 text-center"}>My Projects</h2>
      <p className={"max-w-220 text-center mx-auto"}>
        Turning ideas into functional mobile experiences.
      </p>

      <div className={"mt-10 md:mt-20 grid gap-20"}>
        {projectlist.map((item, index) => (
          <div
            className={`grid md:flex gap-4 md:gap-10 items-center ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className="bg-cover w-full bg-no-repeat bg-center rounded-2xl aspect-[4/3]"
            ></div>

            <div className="w-full">
              <h4 className={"mb-4"}>{item.name}</h4>
              <p>{item.description}</p>
              <div className={" mt-8"}>
                <a href={item.githubUrl}>
                  <FaGithub className={"w-10 h-10"} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

const projectlist = [
  {
    name: "Xswap",
    description:
      "Xswap is a Flutter mobile application for Android and iOS that allows users to perform cross-chain cryptocurrency swaps. It provides a smooth, responsive experience while displaying live market prices and data for a wide range of cryptocurrencies",
    image: project2,
    githubUrl: "https://github.com/Blez-dev/Xswap",
    liveUrl: "",
  },
];
