import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function Intro(props) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // 요소가 보이면 더 이상 관찰하지 않음
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const sentence =
    "안녕하세요, 저는 UI/UX을 최적화하고, 효율적이고 아름다운 웹애플리케이션을 구축하는 프론트엔드 개발 지원자입니다. 다양한 기술 스택을 활용하여 복잡한 문제를 창의적으로 해결하는데 많은 노력을 합니다. 또한, 최신 웹 개발 트렌드와 도구를 빠르게 습득하고 적용하는능력이 강점입니다.저는 협업과 소통을 중요하게 생각하며, 다양한 팀 프로젝트를 통해효과적으로 협력한 경험이 있습니다. 경험을 통해 프로젝트의 목표를 명확히 이해하고, 최고의 결과물을도출하기 위해 노력해왔습니다. 혁신적인 프로젝트와 함께 성장하며, 사용자에게 최고의 경험을 제공하는 데 기여하고 싶습니다.";

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <ShowMore>
      <Showcom ref={ref}>
        <h2>Introduction</h2>
        <Showdiv
          as={motion.div}
          variants={container}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char}
            </motion.span>
          ))}
        </Showdiv>
      </Showcom>
    </ShowMore>
  );
}

export default Intro;
const Showdiv = styled.div`
  width: 1300px;

  font-size: 28px;
`;
const Component = styled.div`
  height: 100vh;
  width: 99vw;
`;
const ShowMore = styled(Component)`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

const Showcom = styled.div`
  width: 1800px;
  height: 300px;
  display: flex;
  justify-content: center;
  h2 {
    font-size: 40px;
    height: 150px;
    margin: 0;
    margin-right: 80px;
  }
`;
