import React from "react";

import styled from "styled-components";
import Top from "./Top";

import hell from "./img/hell.png";
import momukg from "./img/momukg.png";
import sws from "./img/sws.png";

import HeroSection from "./HeroSection";

import ProjectCard from "./ProjectCard";
import Introduceg from "./Introduceg";
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
  const title = "Team Project";
  const text = `<strong>[팀 프로젝트 경험]</strong> 학부 시절 제가 참여했던 팀 프로젝트의 경험과 느낀 점을 기록한 페이지입니다. 이 프로젝트들은 다양한 프론트엔드, 백엔드 개발자 및 디자이너와 협력하여 완성되었습니다. 이러한 협업을 통해 저는 단순한 개발 기술을 넘어 원활한 소통과 커뮤니케이션의 중요성을 깊이 깨달았습니다.`;

  const textwo = `각각의 아이디어와 관점을 조화롭게 결합하는 과정에서 창의성과 문제 해결 능력을 더욱 발전시킬 수 있었습니다. 이를 통해 프로젝트의 성공을 이끌어내는 데 필요한 협력의 가치를 실감할 수 있었습니다. <strong>팀워크</strong> 를 통해 최상의 결과물을 만들어 내는 과정이 저에게 큰 의미가 있었습니다.`;

  const Introduction = "Introduction";
  return (
    <Container>
      <Top title={title} />
      <Introduceg title={Introduction} text={text} textwo={textwo} />
      <ProjectCard projects={projects} />

      <HeroSection name="개인 프로젝트로" linkTo="/Alone" />
    </Container>
  );
};

export default Collabo;

const Container = styled.div`
  font-family: Arial, sans-serif;
  color: white;
  background: #111;
  min-height: 100vh;
`;
