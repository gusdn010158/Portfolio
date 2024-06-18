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
