import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiRecoil,
  SiTypescript,
  SiFramer,
  SiVercel,
  SiStyledcomponents,
  SiReacthookform,
} from "react-icons/si";

function Main() {
  const skills = [
    {
      id: 1,
      name: "Next.js",
      icon: <SiNextdotjs />,
      description:
        "클론 코딩과 기본적인 CRUD 기능을 구현하면서 사용해 보았습니다. 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG) 기능을 활용하여 최적화된 웹사이트를 구축하는 경험을 했습니다.",
    },
    {
      id: 2,
      name: "Vercel",
      icon: <SiVercel />,
      description: "프론트엔드 서버 배포를 위해 사용했습니다.",
    },
    {
      id: 3,
      name: "CSS3",
      icon: <FaCss3Alt />,
      description:
        "styled-components와 일반 CSS를 활용하여 반응형 디자인을 구현한 경험이 있습니다. 다양한 스타일링 기법을 적용하며 UI/UX 개선에 집중했습니다.",
    },
    {
      id: 4,
      name: "Framer Motion",
      icon: <SiFramer />,
      description: "애니메이션 효과를 위해 사용한 라이브러리입니다.",
    },
    {
      id: 5,
      name: "JavaScript",
      icon: <FaJs />,
      description:
        "웹 개발에서 가장 많이 사용한 언어로, 다양한 동적 웹 애플리케이션을 제작하며 비동기 처리, 이벤트 핸들링, ES6+ 문법을 익혔습니다.",
    },
    {
      id: 6,
      name: "Redux",
      icon: <SiRedux />,
      description:
        "전역 상태 관리를 위해 Redux를 프로젝트에 적용한 경험이 있습니다.",
    },
    {
      id: 7,
      name: "React",
      icon: <FaReact />,
      description:
        "대부분의 그룹 프로젝트와 개인 프로젝트에서 React를 사용했습니다. React의 구조를 이해하고, 다양한 Hook을 활용하여 컴포넌트 기반 개발을 경험했습니다.",
    },
    {
      id: 8,
      name: "GitHub",
      icon: <FaGithub />,
      description: "코드 버전 관리와 협업을 위해 사용했습니다.",
    },
    {
      id: 9,

      name: "TypeScript",
      icon: <SiTypescript />,
      description:
        "타입을 활용하여 명확하고 안정적인 코드를 작성할 수 있습니다. 제네릭, 유틸리티 타입, 인덱싱 등 기초적인 타입 시스템을 이해하고 활용해 보았습니다.",
    },
    {
      id: 10,
      name: "Figma",
      icon: <FaFigma />,
      description:
        "웹 디자이너 및 백엔드 개발자와의 원활한 협업을 위해 사용했습니다.",
    },
    {
      id: 11,
      name: "Recoil",
      icon: <SiRecoil />,
      description:
        "새로운 상태 관리 라이브러리를 학습하기 위해 팀원들과 함께 프로젝트에 적용해 보았습니다.",
    },
    {
      id: 12,
      name: "React Hook Form",
      icon: <SiReacthookform />,
      description:
        "폼 데이터를 효율적으로 관리하고 검증하기 위해 사용했습니다.",
    },

    {
      id: 13,
      name: "HTML5",
      icon: <FaHtml5 />,
      description:
        "학부 시절 전공 과제를 수행하며 HTML5를 사용해 웹 페이지를 제작한 경험이 있습니다.",
    },
    {
      id: 14,
      name: "Intersection Observer",
      description:
        "학부 시절, 스크롤 애니메이션을 구현하는 과정에서 사용한 기술입니다.",
    },
    {
      id: 15,
      name: "Styled-Components",
      icon: <SiStyledcomponents />,
      description:
        "반응형 디자인 및 컴포넌트 스타일링을 위해 주로 사용했습니다.",
    },
  ];

  return (
    <div>
      <Container>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skill
        </motion.h1>
        <ProjectGrid>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              <SkillItem>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillText>
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </SkillText>
              </SkillItem>
            </motion.div>
          ))}
        </ProjectGrid>
      </Container>
    </div>
  );
}

export default Main;

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background: #111;
  color: white;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .project-card {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #222;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s;
    cursor: pointer;
    color: white;
    &:hover {
      background: #333;
    }
  }

  .left {
    flex-direction: row;
  }
  .right {
    flex-direction: row-reverse;
  }
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const SkillIcon = styled.div`
  font-size: 40px;
`;

const SkillText = styled.div`
  text-align: left;
  h3 {
    font-size: 20px;
    margin: 0;
  }
  p {
    font-size: 16px;
    margin: 5px 0 0;
  }
`;
