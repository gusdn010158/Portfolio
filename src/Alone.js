import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Top from "./Top";
import tmdb from "./img/tmdb.png";
import todayhome from "./img/todayhome.png";
import ticket from "./img/ticket.png";
import starbuck from "./img/starbuck.png";

import { IoCallOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import ThreeButton from "./ThreeButton";
import Introt from "./Introt";
const projects = [
  {
    id: 1,
    img: todayhome,
    title: "오늘의 집 클론사이트",
    description:
      "이 프로젝트는 처음으로 Next.js를 사용하여 '오늘의 집' 웹사이트를 클론 코딩한 프로젝트입니다.React-Slick 라이브러리를 활용해 다양한 인테리어 이미지를 슬라이드 형식으로 구현하여 부드러운 전환 효과를 추가했습니다.메인 페이지: 최신 인테리어 트렌드와 인기 제품을 한눈에 볼 수 있도록 구성했습니다.상세 페이지: 각 상품별로 상세 정보와 관련 리뷰를 확인할 수 있도록 개별 페이지를 만들었습니다.이 프로젝트를 통해 Next.js의 기본적인 구조와 서버 사이드 렌더링(SSR)을 이해하고, 동적 페이지를 구현하는 방법을 익혔습니다.",
    link: "https://testnext-jet.vercel.app/",
    dydir:
      "이 프로젝트는 처음으로 Next.js를 사용하여 '오늘의 집' 웹사이트를 클론 코딩한 프로젝트입니다.",
  },
  {
    id: 2,
    img: starbuck,
    title: "스타벅스 클론 사이트",
    description:
      "이 프로젝트는 '스타벅스' 공식 웹사이트를 클론 코딩한 프로젝트입니다.스타벅스 웹사이트는 깔끔한 디자인과 다양한 스크롤 애니메이션 효과가 특징적이어서, 스크롤 애니메이션과 사용자 상호작용을 중점적으로 구현했습니다.- Intersection Observer API 활용: 특정 섹션이 화면에 들어올 때 애니메이션 효과를 적용해 부드러운 전환 효과를 구현했습니다.- 헤더 드롭다운 기능: 메뉴를 클릭하면 상세 메뉴를 확인할 수 있도록 인터랙티브한 네비게이션을 추가했습니다.이 프로젝트를 통해 애니메이션과 CSS 활용 능력을 향상시킬 수 있었으며, 동적인 UI 구현에 대한 이해도를 높일 수 있었습니다.",
    link: "https://starbucks-git-master-dlgusdns-projects.vercel.app/",
    dydir:
      "'스타벅스' 공식 웹사이트를 클론 코딩한 프로젝트입니다.스타벅스 웹사이트는 깔끔한 디자인과 다양한 스크롤 애니메이션 효과가 특징적이어서, 스크롤 애니메이션과 사용자 상호작용을 중점적으로 구현했습니다.",
  },
  {
    id: 3,
    img: ticket,
    title: "티켓팅 사이트",
    description:
      "이 프로젝트는 Next.js를 활용하여 티켓팅 사이트를 개발한 프로젝트입니다.즐겨찾기 및 삭제 기능을 추가하며 Redux를 이용한 전역 상태 관리를 적용해 보았습니다.- 티켓 상세 페이지: 각 이벤트 티켓의 상세 정보를 확인할 수 있으며, 즐겨찾기 기능을 적용하여 상태를 유지하고 삭제할 수 있도록 구현했습니다.- Next.js 서버사이드 렌더링(SSR) 활용: 초기 로딩 속도를 최적화하고, SEO를 향상시키기 위해 SSR을 적용했습니다.이 프로젝트를 통해 전역 상태 관리 라이브러리의 개념을 이해하고, Next.js의 SSR 기능을 활용하는 방법을 익혔습니다.",
    link: "https://nextts-ivory.vercel.app/",
    dydir:
      "NEXT.JS로 만든 티켓팅 사이트입니다.즐겨찾기 및 삭제 기능을 추가하며 Redux를 이용한 전역 상태 관리를 적용해 보았습니다.",
  },
  {
    id: 4,
    img: tmdb,
    title: "TMDB",
    dydir:
      "TMDB라는 영화 사이트를 JS와 CSS의 기초를 활용하여 개발한 첫번째 개인프로젝트입니다. ",
    description:
      "이 사이트는 맨땅에 헤딩하듯 처음으로 구축한 TMDB 클론 프로젝트입니다.초반에는 JS와 CSS의 기초를 활용하여 구현했고, 이후 꾸준한 리팩토링을 통해 코드의 재사용성과 효율성을 높이는 경험을 했습니다.이 프로젝트를 통해 기초적인 웹 개발 개념을 실습하고, 점진적으로 개선하는 과정을 경험할 수 있었습니다.",
    link: "https://tmdb-dun.vercel.app/",
  },
];

const Alone = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const title = "Private Project";

  return (
    <Container>
      <Top title={title} />
      <Introt />

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
                initial={{ opacity: 0, y: 40 }}
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
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }} // 👈 뷰포트에 들어올 때 애니메이션 실행
          transition={{ duration: 1, delay: 0.5 }}
        >
          "만드는 즐거움을 사용자의 즐거움으로 연결하는 개발자가 되겠습니다."
          <h4>
            <MdOutlineMailOutline />
            gusdn010158@naver.com
          </h4>
          <h4>
            <IoCallOutline />
            010-2465-3397
          </h4>
          <Link className="linkhero" to="https://github.com/gusdn010158">
            <FaGithub />
            https://github.com/gusdn010158
          </Link>
        </motion.h1>
      </HeroSection>
      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }} // 👈 뷰포트에 들어올 때 애니메이션 실행
          transition={{ duration: 1, delay: 0.5 }}
        >
          봐주셔서 감사합니다.
        </motion.h1>
      </HeroSection>
    </Container>
  );
};

export default Alone;
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
  font-family: Arial, sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-size: 35px;

  h4 {
    font-family: Arial, sans-serif;
    font-size: 30px;
    display: flex;
    align-items: center;
  }
  .linkhero {
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;
    text-decoration: none;
    color: white;
    font-size: 30px;

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
    height: 500px;
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
  color: white;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
