import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Top from "./Top";
import Intro from "./Intro";

function Main(props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

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

  const sentence = "Do you:want to:see more?";
  const words = sentence.split(":");
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
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
      <Top />
      <Intro />
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
      <Skill>
        <Skilld>
          <Skillh2>MY SKILL</Skillh2>
          <div>NEXT.JS</div>
          <div>HTML5</div>
          <div>CSS3</div>
          <div>TYPESCRPIT</div>
          <div>JAVASCRPIT</div>
          <div>REACT</div>
          <div>REDUX</div>
          <div>RECOIL</div>
          <div>REACT HOOK FORM</div>
          <div>FIGMA</div>
          <div>GITHUB</div>
          <div>STYLED COMPONENTS</div>
        </Skilld>
      </Skill>
    </div>
  );
}

export default Main;

const Skillh2 = styled.h2`
  font-size: 40px;
  margin: 0;
`;

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
const Skilld = styled.div`
  width: 300px;
  height: 400px;

  div {
    margin: 10px;
    font-size: 20px;
  }
`;

const Intr = styled(Component)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
  background-image: url("https://img.lovepik.com/bg/20240506/Stunning-3D-Render-Background-of-Web-Design-Screen-on-Laptop_9879317_wh860.jpg!/fw/860");
`;
