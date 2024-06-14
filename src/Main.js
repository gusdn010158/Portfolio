import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Top from "./Top";
import Intro from "./Intro";

function Main(props) {
  return (
    <div>
      <Top />
      <Intro />
      <Intr>
        <Intext>Do you want to see more?</Intext>
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
// const Box = styled(motion.div)`
//   margin: 0;
//   padding: 0;
//   background: antiquewhite;
//   overflow: hidden;
//   overflow-y: auto;
// `;
const Skillh2 = styled.h2`
  font-size: 40px;
  margin: 0;
`;

const Intext = styled.div`
  width: 700px;
  font-size: 150px;
  font-weight: 900;
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
