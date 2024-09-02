import React, { useState } from "react";
import Transition from "../Transition";
import Vr from "../components/mini-components/Vr";
import InfoTab from "../components/mini-components/InfoTab";
import Hr from "../components/mini-components/Hr";
import OpenTab from "../components/mini-components/OpenTab";
import InfoDescription from "../components/InfoDescription";
import Skills from "../components/Skills";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Location from "../components/mini-components/Location";

const aboutMeData = [
  {
    text: "bio",
    icon: "file",
    data: "Khushi Bothra, is a final-year ECE student with a minor in Mathematics at IIT Guwahati. With a deep passion for technology and its societal impact, Khushi brings strong problem-solving abilities and leadership skills to the table. She has interned at Barclays, where she developed a CI/CD pipeline that optimized server migration efficiency. As the Institute Secretary of the Entrepreneurship Development Club, IIT Guwahati, she is keen in fostering innovation and collaboration. Khushi’s experience and drive make her a well-rounded individual ready to tackle challenges in the tech world and beyond.",
  },
  {
    text: "skills",
    icon: "file",
    data: "Khushi has a solid foundation in computer science, developed through academic coursework and practical projects. She is proficient in software development and problem-solving, with experience in the MERN stack. Khushi is also quick to learn and adapt to new technologies.",
  },
  {
    text: "education",
    icon: "file",
    data: "Khushi Bothra is pursuing a B.Tech in Electronics and Communication Engineering from IIT Guwahati, complemented by a minor in Mathematics. Her academic journey includes coursework in Data Structures, Machine Learning, and Blockchain. She has achieved top rankings in national exams, including JEE Advanced and JEE Mains, and consistently excelled in Computer Science throughout her schooling.",
  },
];

const contactsData = [
  {
    text: "k.bothra@iitg.ac.in",
    icon: "mail",
    link: "mailto:k.bothra@iitg.ac.in",
  },

];

const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState("bio");
  const { isMobile } = useContext(ThemeContext);

  function changeSelectedTab(tab) {
    setSelectedTab(tab);
  }

  return (
    <Transition>
      {isMobile && <Location>.../about-me</Location>}
      <div className="grid md:grid-cols-[auto_auto_1fr_auto_1fr] h-full">
        <div className="grid lg:grid-cols-[auto_auto_1fr] lg:w-[250px] md:w-[180px] w-full overflow-hidden">
          <div className="lg:flex hidden px-3 pt-3 justify-center">
            <div>
              <img
                src="/about-me.svg"
                className="min-w-7 cursor-pointer hover:text-red-300"
                alt="terminal"
              />
            </div>
          </div>
          <Vr className={"hidden lg:block"} />
          <div className="w-full overflow-y-scroll overflow-x-hidden scrollbar">
            <InfoTab
              parent={"info"}
              child={aboutMeData}
              defaultOpen={!isMobile}
              changeSelectedTab={changeSelectedTab}
              selectedTab={selectedTab}
            />
            <Hr />
            <InfoTab
              parent={"contacts"}
              child={contactsData}
              defaultOpen={!isMobile}
              changeSelectedTab={changeSelectedTab}
              selectedTab={selectedTab}
            />
          </div>
        </div>
        <Vr />
        <div className="md:overflow-hidden">
          <div className="md:flex hidden">
            <OpenTab text={selectedTab} />
            <Vr className={"!h-auto"} />
          </div>
          <Hr className={"md:block hidden"} />
          <div className="h-full scrollbar overflow-y-scroll ">
            <InfoDescription
              data={
                aboutMeData.filter((item) => item.text === selectedTab)[0].data
              }
            />
          </div>
        </div>
        <Vr className={"md:block hidden"} />
        <div className="md:overflow-hidden">
          <Hr className={"block md:hidden"} />
          <div className="flex">
            <OpenTab text={"skills"} />
            <Vr className={"!h-auto"} />
          </div>
          <Hr />
          <div className="h-full scrollbar md:overflow-y-scroll pb-5">
            <Skills />
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default AboutMe;
