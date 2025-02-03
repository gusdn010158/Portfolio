import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Top from "./Top";
import tmdb from "./img/tmdb.png";
import todayhome from "./img/todayhome.png";
import ticket from "./img/ticket.png";
import starbuck from "./img/starbuck.png";
import Intro from "./Intro";
import { IoCallOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import ThreeButton from "./ThreeButton";
const projects = [
  {
    id: 1,
    img: todayhome,
    title: "오늘의 집 클론사이트",
    description:
      " 오늘의 집 클론 프로젝트 이번 프로젝트는 '오늘의 집'을 클론 코딩한프로젝트입니다. 이 프로젝트를 통해 다양한 웹 기술을 배우고 활용할수 있었습니다. ![Project Screenshot](link-to-screenshot.png) ##프로젝트 개요 '오늘의 집'은 인테리어와 라이프스타일을 공유하는플랫폼입니다. 이 프로젝트는 사용자들이 다양한 인테리어 아이디어를보고, 필요한 제품을 구매할 수 있는 기능을 제공합니다. ## 사용 기술스택 - **Frontend**: Next.js, React, Redux, styled-components -**Backend**: Node.js, Express - **Database**: MongoDB -**Others**: Vercel for deployment, Jest for testing ## 주요 기능 -**홈 페이지**: 최신 인테리어 트렌드와 인기 제품을 한 눈에 볼 수있습니다. - **검색 기능**: 사용자가 원하는 제품을 쉽게 찾을 수있습니다. - **상품 상세 페이지**: 각 상품에 대한 상세 정보와 관련리뷰를 확인할 수 있습니다. - **장바구니 및 결제 시스템**: 사용자가선택한 제품을 장바구니에 담고 결제할 수 있습니다. - **사용자 인증**: 회원가입, 로그인, 로그아웃 기능을 포함합니다. ## 구현 상세### 1. 캐러셀 기능 - 다양한 인테리어 이미지들을 슬라이드 형식으로보여줍니다. - React-slick 라이브러리를 사용하여 부드러운 전환효과를 구현했습니다.",
    link: "https://testnext-jet.vercel.app/",
    dydir: "NEXT.JS로 만든 오늘의 집 클론 사이트입니다.",
  },
  {
    id: 2,
    img: starbuck,
    title: "스타벅스 클론 사이트",
    description:
      "스타벅스 클론 프로젝트 이번 프로젝트는 '스타벅스' 웹사이트를 클론코딩한 프로젝트입니다. 이 프로젝트를 통해 다양한 웹 기술을 배우고 활용할 수 있었습니다. ![ProjectScreenshot](link-to-screenshot.png) ## 프로젝트 개요 '스타벅스'웹사이트는 깔끔한 디자인과 다양한 상호작용을 제공하는 인터페이스로유명합니다. 이 프로젝트에서는 그 중에서도 스크롤 애니메이션과사용자 상호작용을 중점적으로 구현했습니다. ## 사용 기술 스택 -**Frontend**: Next.js, React, Redux, styled-components, JavaScript- **Backend**: Node.js, Express - **Database**: MongoDB - **Others**: Vercel for deployment, Jest for testing ## 주요 기능 -**홈 페이지**: 스타벅스의 최신 프로모션과 인기 메뉴를 보여줍니다.- **메뉴 페이지**: 다양한 음료와 푸드를 카테고리별로 볼 수있습니다. - **상세 페이지**: 각 메뉴의 상세 정보를 확인할 수있습니다. - **장바구니 및 주문 시스템**: 사용자가 선택한 메뉴를장바구니에 담고 주문할 수 있습니다. - **사용자 인증**: 회원가입,로그인, 로그아웃 기능을 포함합니다. ## 구현 상세 ### 1.Intersection Observer를 사용한 스크롤 애니메이션 - 특정 섹션이 화면에 들어올 때 애니메이션 효과를 주기 위해 Intersection ObserverAPI를 사용했습니다. - 스크롤 시 자연스러운 애니메이션 전환을구현했습니다.",
    link: "https://starbucks-git-master-dlgusdns-projects.vercel.app/",
    dydir: "React로 만든 스타벅스 클론 사이트 입니다.",
  },
  {
    id: 3,
    img: ticket,
    title: "티켓팅 사이트",
    description:
      "티켓팅 사이트 프로젝트 이번 프로젝트는 티켓팅 사이트를 클론 코딩한프로젝트입니다. 이 프로젝트를 통해 다양한 웹 기술을 배우고 활용할수 있었습니다. ![Project Screenshot](link-to-screenshot.png) ##프로젝트 개요 이 프로젝트는 사용자가 다양한 이벤트 티켓을 쉽게검색하고 구매할 수 있도록 하는 것을 목표로 합니다. Next.js와Redux를 사용하여 효율적인 상태 관리를 구현하였습니다. ## 사용 기술스택 - **Frontend**: Next.js, React, Redux, styled-components,JavaScript - **Backend**: Node.js, Express - **Database**: MongoDB**Others**: Vercel for deployment, Jest for testing ## 주요 기능**홈 페이지**: 최신 이벤트와 인기 티켓을 한 눈에 볼 수 있습니다.**검색 기능**: 사용자가 원하는 이벤트를 쉽게 찾을 수 있습니다. -**티켓 상세 페이지**: 각 이벤트 티켓에 대한 상세 정보와 관련리뷰를 확인할 수 있습니다. - **장바구니 및 결제 시스템**: 사용자가선택한 티켓을 장바구니에 담고 결제할 수 있습니다. - **사용인증**: 회원가입, 로그인, 로그아웃 기능을 포함합니다. ## 구현 상세### 1. Next.js를 사용한 서버사이드 렌더링 (SSR) - 서버사이드렌더링을 통해 초기 로딩 속도를 최적화하고 SEO를 향상시켰습니다. -Next.js의 `getServerSideProps`를 사용하여 페이지 로드 시 데이터를미리 가져왔습니다.",
    link: "https://nextts-ivory.vercel.app/",
    dydir: "NEXT.JS로 만든 티켓팅 사이트입니다.",
  },
  {
    id: 4,
    img: tmdb,
    title: "TMDB",
    description: "TMDB사이트",
    dydir: "React로 만든 TMDB 클론 사이트 입니다.",
    link: "https://tmdb-dun.vercel.app/",
  },
];

const Alone = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const sentence =
    "이 페이지는 제가 개인적으로 진행했던 프로젝트들을 소개하고 있습니다. 제가 흥미를 느껴 직접 만들어보고 싶었던 페이지들로 구성되어 있습니다. 각 프로젝트에서는 주로 HTML, CSS, JavaScript, React 등 다양한 프론트엔드 기술을 사용하였습니다. 이를 통해 다음과 같은 기술을 습득하고 숙달할 수 있었습니다:HTML/CSS: 웹 페이지의 구조와 스타일링을 효과적으로 구현하는 방법.JavaScript: 동적인 사용자 인터페이스와 기능 구현.React: 컴포넌트 기반의 효율적인 개발 및 상태 관리.이러한 개인 프로젝트를 진행하면서 다양한 기술을 탐구하고 적용하는 과정을 통해, 구글링을 통한 문제 해결 및 여러 라이브러리의 효율적인 사용 방법을 익히게 되었습니다. 스스로 하고 싶은 프로젝트를 수행하다 보니, 자연스럽게 새로운 도구와 기술을 적용하는 데 자신감을 얻을 수 있었습니다.저는 프론트엔드 개발자로서, 이러한 경험을 바탕으로 더욱 창의적이고 효율적인 웹 솔루션을 제공할 수 있게 되었습니다.";
  const title = "Private Project";
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
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
