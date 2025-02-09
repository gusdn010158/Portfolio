import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Top from "./Top";
import { Link } from "react-router-dom";
import hell from "./img/hell.png";
import momukg from "./img/momukg.png";
import sws from "./img/sws.png";
import Intro from "./Intro";

import ThreeButton from "./ThreeButton";
const projects = [
  {
    id: 1,
    img: momukg,
    title: "MOMUKG",
    description:
      "학교 주변의 맛집을 쉽게 찾을 수 있도록 만든 웹사이트입니다.ChatGPT API를 활용하여 사용자가 원하는 맛집을 추천받을 수 있도록 구현했습니다.이 프로젝트는 백엔드 개발자 및 다른 프론트엔드 개발자와 협업하여 로그인/회원가입 기능을 구축한 협업 프로젝트입니다.또한, 사용자가 검색한 맛집 정보를 마이페이지에 저장할 수 있도록 백엔드와 데이터를 연동했습니다.",
    link: "https://momukg-front.vercel.app/",
    dydir:
      "React로 만든 사이트로로 학교 주변의 맛집을 쉽게 찾을 수 있도록 만든 웹사이트입니다.ChatGPT API를 활용하여 사용자가 원하는 맛집을 추천받을 수 있도록 구현했습니다.",
  },
  {
    id: 2,
    img: hell,
    title: "헬린이 쇼핑몰",
    description:
      "운동을 처음 시작하는 사람들을 위한 커뮤니티 & 헬스 용품 쇼핑몰입니다.이 프로젝트는 첫 번째 협업 프로젝트로, 웹 디자이너를 꿈꾸는 학부생과 함께 Figma를 활용하여 UI/UX 디자인을 기획했습니다.주요 기능`json-server`를 활용한 CRUD 구현글쓰기 & 댓글 기능을 효율적으로 컴포넌트화, 쇼핑몰에서 다양한 제품을 확인하고 구매할 수 있는 기능을 구현해보았습니다.",
    link: "https://health-three-pearl.vercel.app/",
    dydir:
      "React로 만든 사이트로 운동을 처음 시작하는 사람들을 위한 커뮤니티 & 헬스 용품 쇼핑몰입니다.",
  },
  {
    id: 3,
    img: sws,
    title: "SWS",
    description:
      "함께 공부할 친구를 찾고, 중간 지점의 도서관을 추천받을 수 있는 웹사이트입니다.이 프로젝트에서는 페이지네이션, 반응형 캐러셀, 카카오 지도 API 연동 등 다양한 기능을 적용했습니다.또한, 백엔드와 협업하여 회원가입, 로그인, 마이페이지, 친구 추가/삭제 기능, 댓글 & 대댓글, 글쓰기 기능을 구현했습니다. 주요 기능으론 원하는 지역의 도서관 검색 & 중간 지점 도서관 추천공부할 친구를 찾을 수 있는 커뮤니티 기능 반응형 디자인 & 페이지네이션 적용기능들을 구현했습니다.",
    link: "https://sws-frontend-theta.vercel.app/",
    dydir:
      "React로 만든 사이트로 함께 공부할 친구를 찾고, 중간 지점의 도서관을 추천받을 수 있는 웹사이트입니다.",
  },
];

const Collabo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const title = "Team Project";
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Top title={title} />
      <Intro />
      <NavBar
        style={{ background: `rgba(0, 0, 0, ${Math.min(scrollY / 500, 0.8)})` }}
      ></NavBar>

      <ProjectSection>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -500 : 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to={project.link}>
              <img src={project.img} alt="img" />
            </Link>
            <RIGHT>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {project.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.dydir}
              </motion.p>
              <Twobtn>
                <MLink to={project.link}>사이트 들어가기</MLink>

                <ThreeButton
                  onClick={() => setSelectedProject(project)}
                  selcet={"더보기"}
                />
              </Twobtn>
            </RIGHT>
          </motion.div>
        ))}
      </ProjectSection>
      {selectedProject && (
        <Popup>
          <PopupContent
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CloseButton onClick={() => setSelectedProject(null)}>
              ✖
            </CloseButton>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
          </PopupContent>
        </Popup>
      )}
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link className="linkhero" to="/Alone">
            개인 프로젝트로
          </Link>
        </motion.h1>
      </HeroSection>
    </Container>
  );
};

export default Collabo;
const Twobtn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
`;
const RIGHT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
`;
const MLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: Arial, sans-serif;
  margin: 10px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 5px;
  background-color: gray;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: gray;
  }
`;
const Container = styled.div`
  font-family: Arial, sans-serif;
  color: white;
  background: #111;
  min-height: 100vh;
`;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  padding: 15px;
  color: white;

  text-align: center;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  .linkhero {
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;
    text-decoration: none;
    color: white;
    font-size: 50px;
    transition: all 0.5s ease;
    &:hover {
      color: black;
    }
  }
`;

const ProjectSection = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .project-card {
    background: #222;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
    width: 80%;
    text-align: center;
    display: flex;
  }
  img {
    width: 800px;
    height: 500px;
    object-fit: contain;
  }
`;
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled(motion.div)`
  background: #111;
  padding: 20px;
  border-radius: 10px;
  width: 50%;
  text-align: center;
  position: relative;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  color: white;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
