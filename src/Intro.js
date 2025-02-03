import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function Intro({ sentence }) {
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
      <Content>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Introduction
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <strong>[첫인상을 주는 프론트엔드]</strong>
          학부생 시절 PHP, JSP, Express, React를 활용한 웹 개발 경험이 있으며,
          사용자에게 먼저 보여지는 프론트엔드에 흥미를 느껴 프론트엔드에
          집중하고 있습니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <strong>[성장에 대한 즐거움]</strong>
          새로운 프로젝트를 시작할 때마다, 단순히 이전에 사용하던 기술을
          활용하는 것이 아닌, 이전 프로젝트에서 아쉬웠던 부분을 개선하고 새로운
          코드 스타일이나 기술을 적용하는 것에 큰 즐거움을 느낍니다. 이는 개발에
          있어서의 성장을 위한 동력이 되어주고 있습니다.
        </motion.p>

        {/* {sentence.split("").map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))} */}
      </Content>
    </ShowMore>
  );
}

export default Intro;
const Content = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #00bfff;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  strong {
    color: #00bfff;
  }
`;
const Showdiv = styled.div`
  width: 1300px;
  font-family: Arial, sans-serif;
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
  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 15px;
  }
  strong {
    color: #00bfff;
  }
  h2 {
    font-family: Arial, sans-serif;
    font-size: 40px;
    height: 150px;
    margin: 0;
    margin-right: 80px;
  }
`;
