import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineFileZip } from "react-icons/ai";
import logo from "./img/logo.png";
function Main(props) {
  return (
    <div>
      <Maintop>
        <Top>
          <Logo>
            <Limg src={logo} />
          </Logo>
          <Abouttop>
            <Bigfont>About</Bigfont>
            <SS>page represents the introduction, skills, and vision of me.</SS>
          </Abouttop>
          <Big>
            <Bigfont>Team Project</Bigfont>
            <SS>
              This page introduces collaborative projects <br /> with team
              members.
            </SS>
          </Big>
          <Small>
            <Bigfont>Private Project</Bigfont>
            <SS>
              This page is about a personal project that <br /> I personally
              covered.
            </SS>
          </Small>
          <Soge>
            <Bigfont>Front-End</Bigfont>
            <div> Developer</div>
          </Soge>
        </Top>
        <Pro>
          <Proicon>
            <AiOutlineFileZip />
          </Proicon>
          <Prorg>
            <span>HyunWoo's</span>
            <Prospan>PORTFOLIO </Prospan>
          </Prorg>
        </Pro>
      </Maintop>
      <ShowMore>쇼모얼</ShowMore>
      <Intro>
        <Intext>Do you want to see more?</Intext>
      </Intro>
      <Skill>스킬</Skill>
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
const Intext = styled.div`
  width: 700px;
  font-size: 150px;
  font-weight: 900;
`;
const Limg = styled.img`
  width: 200px;
  height: 150px;
`;
const Bigfont = styled.div`
  font-size: 45px;
`;
const Proicon = styled.div`
  font-size: 230px;
  width: 370px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SS = styled.div`
  font-size: 14px;
  display: flex;

  text-align: left;
`;
const Top = styled.div`
  display: flex;
`;
const Prorg = styled.div`
  color: white;
  font-size: 60px;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Pro = styled.div`
  color: white;
  display: flex;
`;
const Prospan = styled.span`
  font-size: 130px;
`;
const Header = styled.div`
  color: white;
  margin-right: 50px;
  width: 300px;
  height: 200px;
  font-size: 30px;
  display: flex;
  justify-content: center;

  flex-direction: column;
`;

const Logo = styled(Header)`
  margin-right: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Soge = styled(Header)``;
const Abouttop = styled(Header)`
  width: 230px;
`;
const Big = styled(Header)`
  width: 300px;
`;
const Small = styled(Header)``;

const Component = styled.div`
  height: 100vh;
  width: 99vw;
`;
const Skill = styled(Component)``;

const Intro = styled(Component)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
  background-image: url("https://img.lovepik.com/bg/20240506/Stunning-3D-Render-Background-of-Web-Design-Screen-on-Laptop_9879317_wh860.jpg!/fw/860");
`;
const Maintop = styled(Component)`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ShowMore = styled(Component)``;
