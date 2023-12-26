import React, { useState } from "react";
import { arrow } from "@/assets/icons";
import Image from "next/image";
import Modal from "@/components/Modal";

interface InfoBoxProps {
  text: string;
  link: string;
  btnText: string;
}

const InfoBox = ({ text, link, btnText }: InfoBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <button
        onClick={() => setIsOpen(true)}
        className="neo-brutalism-white neo-btn cursor-pointer"
      >
        {btnText}
        <Image src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </button>
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        <div>{btnText}</div>
      </Modal>
    </div>
  );
};
const renderContent: { [key: number]: JSX.Element } = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      <span className="font-semibold"> Hello this is Kenzo</span>
      <br />A Software Engineer from Portland
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and like learningn ew stuff"
      link="/about"
      btnText={"Learn about me"}
    />
  ),
  3: (
    <InfoBox
      text="These are my projects"
      link="/projects"
      btnText={"Projects"}
    />
  ),
  4: (
    <InfoBox
      text="Worked with many companies and like learningn ew stuff"
      link="/contact"
      btnText={"Lets talk"}
    />
  ),
};

interface HomeInfoProps {
  currentStage: number;
}

const HomeInfo = ({ currentStage }: HomeInfoProps) => {
  return renderContent[currentStage];
};

export default HomeInfo;
