import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Top from "./Top";
import Intro from "./Intro";
const skills = [
  "NEXT.JS",
  "HTML5",
  "CSS3",
  "TYPESCRIPT",
  "JAVASCRIPT",
  "REACT",
  "REDUX",
  "RECOIL",
  "REACT HOOK FORM",
  "FIGMA",
  "GITHUB",
  "STYLED COMPONENTS",
  "Three.js",
  "Framer-Motion",
  "Intersection Observer",
];
function Main(props) {
  const [visible, setVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const ref = useRef(null);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // 요소가 보이면 더 이상 관찰하지 않음
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          skillObserver.unobserve(entry.target); // 요소가 보이면 더 이상 관찰하지 않음
        }
      });
    });

    if (skillRef.current) {
      skillObserver.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        skillObserver.unobserve(skillRef.current);
      }
    };
  }, []);

  const sentence2 =
    "안녕하세요, 저는 UI/UX을 최적화하고, 효율적이고 아름다운 웹애플리케이션을 구축하는 프론트엔드 개발 지원자입니다. 다양한 기술 스택을 활용하여 복잡한 문제를 창의적으로 해결하는데 많은 노력을 합니다. 또한, 최신 웹 개발 트렌드와 도구를 빠르게 습득하고 적용하는능력이 강점입니다.저는 협업과 소통을 중요하게 생각하며, 다양한 팀 프로젝트를 통해효과적으로 협력한 경험이 있습니다. 경험을 통해 프로젝트의 목표를 명확히 이해하고, 최고의 결과물을도출하기 위해 노력해왔습니다. 혁신적인 프로젝트와 함께 성장하며, 사용자에게 최고의 경험을 제공하는 데 기여하고 싶습니다.";
  const title = "PORTFOLIO";
  const sentence = "Do you:want to:see more?";
  const words = sentence.split(":");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  ///////////////////////////////////////
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Top title={title} />
      <Intro sentence={sentence2} />
      <Intr ref={ref}>
        <Intext
          as={motion.div}
          variants={container}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={child}>
              {word}
            </motion.span>
          ))}
        </Intext>
      </Intr>
      <Skill ref={skillRef}>
        <SkillTitle as={motion.h2} variants={itemVariants}>
          MY SKILLS
        </SkillTitle>
        <SkillContainer
          as={motion.div}
          initial="hidden"
          animate={skillsVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <SkillItem key={index} as={motion.div} variants={itemVariants}>
              {skill}
            </SkillItem>
          ))}
        </SkillContainer>
      </Skill>
    </div>
  );
}

export default Main;

const Intext = styled.div`
  width: 750px;
  font-size: 150px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Component = styled.div`
  height: 100vh;
  width: 99vw;
`;
const Skill = styled(Component)`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Intr = styled(Component)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
  background-image: url("https://img.lovepik.com/bg/20240506/Stunning-3D-Render-Background-of-Web-Design-Screen-on-Laptop_9879317_wh860.jpg!/fw/860");
`;
const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #f0f0f0;
  border-radius: 10px;
  width: 700px;
  margin: 0 auto;
  height: 400px;
  flex-wrap: wrap;
`;

const SkillTitle = styled.h2`
  font-size: 52px;
  color: 0;
  margin: 0;
`;

const SkillItem = styled.div`
  margin: 5px 0;
  font-size: 18px;
  color: #555;
`;
