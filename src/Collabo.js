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
      "챗지피티 통합 티켓팅 사이트 프로젝트 이번 프로젝트는 백엔드와의 통신을 통해 챗지피티 API를 통합한 티켓팅 사이트를 클론 코딩한 프로젝트입니다. 이 프로젝트를 통해 다양한 웹 기술을 배우고 활용할 수있었습니다. ![Project Screenshot](link-to-screenshot.png) ##프로젝트 개요 이 프로젝트는 사용자가 다양한 이벤트 티켓을 검색하고구매할 수 있는 기능을 제공하며, 챗지피티 API를 통합하여 사용자가질문을 하고 답변을 받을 수 있는 기능을 포함합니다. 또한, 사용자가챗지피티에서 검색한 내용을 마이페이지에서 확인할 수 있습니다. ##사용 기술 스택 - **Frontend**: Next.js, React, Redux,styled-components, JavaScript - **Backend**: Node.js, Express -**Database**: MongoDB - **Others**: Vercel for deployment, Jest fortesting, OpenAI GPT-3 API ## 주요 기능 - **홈 페이지**: 최신이벤트와 인기 티켓을 한 눈에 볼 수 있습니다. - **검색 기능**:사용자가 원하는 이벤트를 쉽게 찾을 수 있습니다. - **티켓 상세페이지**: 각 이벤트 티켓에 대한 상세 정보와 관련 리뷰를 확인할 수있습니다. - **장바구니 및 결제 시스템**: 사용자가 선택한 티켓을장바구니에 담고 결제할 수 있습니다. - **챗지피티 통합**: 사용자가챗지피티 API를 통해 질문을 하고 답변을 받을 수 있습니다. - **마이페이지**: 사용자가 챗지피티에서 검색한 내용을 확인할 수있습니다. - **사용자 인증**: 회원가입, 로그인, 로그아웃 기능을포함합니다. ## 구현 상세 ### 1. Next.js를 사용한 서버사이드 렌더링 (SSR) - 서버사이드 렌더링을 통해 초기 로딩 속도를 최적화하고 SEO를  향상시켰습니다. - Next.js의 `getServerSideProps`를 사용하여 페이지            로드 시 데이터를 미리 가져왔습니다.",
    link: "https://momukg-front.vercel.app/",
    dydir: "React로 만든 챗지피티 통합 티켓팅 사이트 프로젝트입니다.",
  },
  {
    id: 2,
    img: hell,
    title: "헬린이 쇼핑몰",
    description:
      " 이번 사이트는 협업 프로젝트로서 운동을 처음 시작하는 사람들을 위한커뮤니티, 헬스 용품 쇼핑 사이트입니다. 여기는 처음으로 협업을 했던사이트고 figma로 웹 디자이너와 함께 한 프로젝트입니다.",
    link: "https://health-three-pearl.vercel.app/",
    dydir: "React로 만든 운동 초보자를 위한 쇼핑몰 및 커뮤니티 사이트입니다.",
  },
  {
    id: 3,
    img: sws,
    title: "SWS",
    description:
      "sws는 shall we study라는 약어로 같이 공부할 친구와 중간에 있는 도서관을 찾아서 공부할수있게 만드는 사이트입니다. 이 사이트는중간지점 도서관을 찾거나 전체 도서관 관련에 대해서 볼수있고 같이 공부할 친구를 찾을수있는 커뮤니티 기능을 가지고 있습니다.",
    link: "https://sws-frontend-theta.vercel.app/",
    dydir:
      "React로 만든 도서관을 찾아 같이 공부할 친구를 구할 수 있는 사이트입니다.",
  },
];

const Collabo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const sentence =
    "이 페이지는 제가 참여했던 팀 프로젝트의 경험과 느낀 점을 기록한 페이지입니다. 이 프로젝트들은 다양한 프론트엔드, 백엔드 개발자 및 디자이너 등 여러 분야의 전문가들과 협력하여 완성되었습니다. 이러한 협업을 통해 저는 단순한 개발 기술을 넘어, 원활한 소통과 커뮤니케이션의 중요성을 깊이 깨달았습니다. 각각의 아이디어와 관점을 조화롭게 결합하는 과정에서, 창의성과 문제 해결 능력을 더욱 발전시킬 수 있었습니다. 이를 통해 프로젝트의 성공을 이끌어내는 데 필요한 협력의 가치를 실감할 수 있었습니다.";
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
      <Intro sentence={sentence} />
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
            <img src={project.img} alt="img" />
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

  border-radius: 5px;
  background-color: gray;
  &:hover {
    background-color: black;
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
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
