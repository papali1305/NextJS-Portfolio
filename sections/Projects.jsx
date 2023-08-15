import React, { Fragment } from "react";
import Image from "next/image";
import { CgClapperBoard } from "react-icons/cg";
import { ProjectsData } from "@/constants";

export const Projects = () => {
  return (
    <Fragment>
      <section id="projects">
        <div className={`dark:bg-black py-8 bg-[#ecf8f9]`}>
          <div>
            <h3 className="sectionHeading">
              <span className="mr-4">
                <CgClapperBoard />
              </span>
              Projects
            </h3>
          </div>

          <div className="flex flex-wrap gap-6 mx-6 justify-center">
            {ProjectsData.map((project) => (
              <div key={project.name}>
                <a target="_blank" href={project.url}>
                  <Image
                    width={300}
                    height={200}
                    src={project.imageUrl}
                    alt={project.name}
                  />
                </a>
                <p className="text-center p-1">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;