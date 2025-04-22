import { Link } from "react-router-dom";
import React from "react";
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

import ProjectCard from "./ProjectCard";
import Introduceg from "./Introduceg";
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
  const title = "Private Project";
  const text = `  <strong>[개인 프로젝트 경험]</strong>
            제가 개인적으로 진행했던 프로젝트들을 소개하는 페이지입니다. 흥미를
            느껴 배웠던 기술을 직접 활용해보고 싶어서 시작한 프로젝트들로
            구성되어 있습니다. 각 프로젝트에서는 HTML, CSS, JavaScript, React 등
            다양한 프론트엔드 기술을 활용하여 효율적인 개발 및 상태 관리를
            경험할 수 있었습니다.`;

  const textwo = ` 이러한 개인 프로젝트를 진행하면서 다양한 기술을 탐구하고 적용하는
            과정에서, 구글링을 통한 문제 해결 능력과 여러 라이브러리를
            효율적으로 사용하는 방법을 익히게 되었습니다. 스스로 원하는
            프로젝트를 수행하다 보니 자연스럽게 새로운 도구와 기술을 적용하는 데
            자신감을 얻었습니다. 저는 프론트엔드 개발자로서 이러한 경험을
            바탕으로 더욱 창의적이고 효율적인 웹 솔루션을 제공할 수 있는 역량을
            갖추고 있습니다.`;

  const Introduction = "Introduction";
  return (
    <Container>
      <Top title={title} />
      <Introduceg title={Introduction} text={text} textwo={textwo} />

      <ProjectCard projects={projects} />

      <HeroSection>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          봐주셔서 감사합니다.
        </motion.h1>
      </HeroSection>
    </Container>
  );
};

export default Alone;

const Container = styled.div`
  font-family: Arial, sans-serif;
  color: white;
  background: #111;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  font-family: Arial, sans-serif;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-size: 35px;
  @media (max-width: 1440px) {
    font-size: 25px;
  }
  h4 {
    font-family: Arial, sans-serif;
    font-size: 30px;
    display: flex;
    align-items: center;
    @media (max-width: 1440px) {
      font-size: 25px;
    }
  }
  .linkhero {
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;
    text-decoration: none;
    color: white;
    font-size: 30px;

    transition: all 0.5s ease;

    @media (max-width: 1440px) {
      font-size: 25px;
    }
    &:hover {
      color: black;
    }
  }
`;
