"use client";
import React, { useTransition, useState } from "react";
//import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.JS</li>
        <li>JavaScript</li>
        <li>Node.JS</li>
        <li>Google Cloud</li>
        <li>Generative AI</li>
        <li>Java</li>
        <li>Python</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Visual Studio Code</li>
        <li>Postman</li>
        <li>IntelliJ IDEA</li>
        <li>Figma</li>
        <li>LM Studio</li>
        <li>Cursor</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <h5>B.S. Computer Science, Kennesaw State University</h5>
        <p>
          My <Link href="/journey">Journey</Link>
        </p>
        <br></br>
        <li>
          <b>Publication</b> - Intelligent-Checkout System Research{" "}
          <Link href="https://bit.ly/ChecSys">Paper</Link>.
        </li>
        <li>
          <b>Capstone Project</b> - Led a 2-member team of highly motivated
          software engineers in establishing autonomous protection for a
          defensive autonomous sentry gun by utilizing the latest machine
          learning, generative AI libraries and IoT devices.
        </li>
        <li>
          <b>Organizations</b> - Member of Association for Computing Machinery,
          IEEE Computer Society.
        </li>
        <li>
          <b>Volunteer</b> - 2019 CCSE Hackathon Student Volunteer. 2018
          Hackathon Participator at Clemson University.
        </li>
        <li>
          <b>Related Coursework</b> - Data Structures, Algorithm Analysis,
          Database Systems, Operating Systems, Machine Vision, AI, Internet
          Programming.
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>DeepLearning.AI</b> - Introductory to Generative AI for Software
          Development
        </li>
        <li>
          <b>Google Professional Cloud Developer</b> - Scaling and Applying
          Automation to an elastic Google Cloud Infrastructure Console Project
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/about.png"
          width="500"
          height="500"
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack developer with experience creating intuitive
            applications utilizing the latest frameworks and languages including
            Next.JS, Java, and Python. I also have knowledge in Google Cloud,
            Generative AI technologies and setting up development environments
            with Jenkins for a collaborative session and growth. Be sure to
            check out some of my designs{" "}
            <Link href="https://angulardesigns-aaa7c.web.app/">here.</Link>
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
