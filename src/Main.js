import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { AiOutlineFileZip } from "react-icons/ai";
function Main(props) {
  return (
    <div>
      <Maintop>
        <Top>
          <Logo>Logo</Logo>
          <Abouttop>
            <div>about</div>
            <SS>
              This is a page that represents the introduction, skills, and
              vision of me.
            </SS>
          </Abouttop>
          <Big>
            <div>collaborative project</div>
            <SS>
              This page introduces collaborative projects with team members.
            </SS>
          </Big>
          <Small>
            <div>private project</div>
            <SS>
              This page is about a personal project that I personally covered.
            </SS>
          </Small>
          <Soge>
            Front-End <br />
            Developer
          </Soge>
        </Top>
        <Pro>
          <div>
            icon
            {/* <AiOutlineFileZip /> */}
          </div>
          <Prorg>
            <span>HyunWoo's</span>
            <Prospan>PORTFOLIO </Prospan>
          </Prorg>
        </Pro>
      </Maintop>
      <ShowMore>쇼모얼</ShowMore>
      <Intro>인트로</Intro>
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
const SS = styled.div`
  font-size: 16px;
`;
const Top = styled.div`
  display: flex;
`;
const Prorg = styled.div`
  color: white;
  font-size: 60px;
  height: 400px;
  display: flex;
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
  width: 300px;
  height: 200px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled(Header)`
  margin-right: 350px;
`;
const Soge = styled(Header)``;
const Abouttop = styled(Header)``;
const Big = styled(Header)``;
const Small = styled(Header)``;

const Component = styled.div`
  height: 100vh;
  width: 99vw;
`;
const Skill = styled(Component)``;

const Intro = styled(Component)`
  background-color: black;
`;
const Maintop = styled(Component)`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ShowMore = styled(Component)``;
