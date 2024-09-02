import React from "react";
import Transition from "../Transition";
import Vr from "../components/mini-components/Vr";
import InfoTab from "../components/mini-components/InfoTab";
import ProjectItem from "../components/ProjectItem";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Location from "../components/mini-components/Location";

const projectsData = [
  {
    text: "Udgamiitg",
    icon: "share",
    img: "/projects/Udgamiitg.jpeg",
    link: "https://udgam-2023.vercel.app/",
    discription:
      "Developed website for Udgam, the Annual entrepreneurship summit of IIT Guwahati.",
  },
  {
    text: "AlgoLens",
    icon: "share",
    img: "/projects/AlgoLens.jpeg",
    link: "https://khushi-bothra.github.io/CPU-Algorithms/",
    discription:
      "Provides dynamic simulation of Operating System Algorithms for CPUs.",
  },
  {
    text: "DormHub",
    icon: "share",
    img: "/projects/DormHub.jpeg",
    link: "https://github.com/Khushi-Bothra/DormHub",
    discription:
      "Hostel management portal for my dormitory at IIT Guwahati.",
  },

];

const Projects = () => {
  const { isMobile } = useContext(ThemeContext);
  return (
    <Transition>
      {isMobile && <Location>.../contact-me</Location>}
      <div className="grid text-white text-sm h-full md:grid-cols-[auto_auto_1fr]">
        <div className="lg:w-[250px] md:w-[180px] w-full overflow-y-scroll scrollbar hidden md:block">
          <InfoTab
            parent={"Projects"}
            child={projectsData}
            defaultOpen={true}
          />
        </div>
        <Vr />
        <div className="overflow-y-scroll scrollbar pb-10">
          <div className="h-full flex-center gap-4 flex-wrap p-5 ">
            {projectsData.map((item, index) => {
              return <ProjectItem item={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Projects;
