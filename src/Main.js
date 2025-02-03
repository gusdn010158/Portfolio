import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Top from "./Top";
import Intro from "./Intro";
import Introduce from "./Introduce";

function Main(props) {
  const skills = [
    {
      id: 1,
      name: "NEXT.JS",
      description: "서버 사이드 렌더링을 지원하는 React 프레임워크",
    },
    {
      id: 2,
      name: "HTML5",
      description: "웹 페이지 구조를 만드는 마크업 언어",
    },
    {
      id: 3,
      name: "CSS3",
      description: "웹 디자인 및 스타일을 적용하는 스타일링 언어",
    },
    {
      id: 4,
      name: "TYPESCRIPT",
      description: "정적 타입을 지원하는 자바스크립트의 확장판",
    },
    {
      id: 5,
      name: "JAVASCRIPT",
      description: "웹 개발에서 가장 널리 사용되는 프로그래밍 언어",
    },
    { id: 6, name: "REACT", description: "" },
    { id: 7, name: "REDUX", description: "" },
    { id: 8, name: "RECOIL", description: "" },
    { id: 9, name: "REACT HOOK FORM", description: "" },
    { id: 10, name: "FIGMA", description: "" },
    { id: 11, name: "GITHUB", description: "" },
    { id: 12, name: "STYLED COMPONENTS", description: "" },
    { id: 13, name: "Framer-Motion", description: "" },
    { id: 14, name: "Intersection Observer", description: "" },
    { id: 15, name: "Vercel", description: "" },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const toggleDescription = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };
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

  return (
    <div>
      <Top title={title} />
      <Introduce />
      <Intr ref={ref}>
        <motion.div
          drag
          dragConstraints={{ left: -900, right: 500, top: -400, bottom: 350 }}
          style={{
            width: "750px",
            height: "650px",
            backgroundColor: "#fff",
            borderRadius: "15%",
            mixBlendMode: "difference",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-120%, -60%)",
          }}
        >
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
        </motion.div>
      </Intr>

      <Container>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skill
        </motion.h1>

        <ProjectGrid>
          {skills.map((skill) => (
            <div key={skill.id} style={{ width: "100%" }}>
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: skill.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleDescription(skill.id)}
              >
                {skill.name}
              </motion.div>

              {/* 설명 박스 (선택된 항목 아래에서 나타남) */}
              {selectedId === skill.id && (
                <motion.div
                  className="description-box"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {skill.description}
                </motion.div>
              )}
            </div>
          ))}
        </ProjectGrid>
      </Container>

      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link className="linkhero" to="/Collabo">
            그룹 프로젝트로
          </Link>
        </motion.h1>
      </HeroSection>
    </div>
  );
}

export default Main;

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background: #111;
  color: white;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  justify-content: center;

  .project-card {
    background: #222;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    transition: all 0.3s;
    cursor: pointer;
    color: white;
    &:hover {
      background: #333;
    }
  }

  .description-box {
    background: rgba(17, 16, 16, 0.1);
    margin-top: 10px;
    padding: 30px 0px 30px 0px;
    border-radius: 8px;
    font-size: 16px;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  font-family: Arial, sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-size: 40px;
  .linkhero {
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;
    text-decoration: none;
    color: black;
    font-size: 50px;
    &:hover {
      color: gray;
    }
  }
`;
const Intext = styled.div`
  width: 750px;
  font-size: 130px;
  font-weight: 900;
  font-family: Arial, sans-serif;
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
`;

const Component = styled.div`
  height: 100vh;
  width: 99vw;
`;

const Intr = styled(Component)`
  height: 100vh;
  background-color: #000; // 검정색 배경
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vw;
    background-image: url("https://img.lovepik.com/bg/20240506/Stunning-3D-Render-Background-of-Web-Design-Screen-on-Laptop_9879317_wh860.jpg!/fw/860");
  }
`;
