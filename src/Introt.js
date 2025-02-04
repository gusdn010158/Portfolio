import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function Introt() {
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
        <Modiv>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <strong>[개인 프로젝트 경험]</strong>
            제가 개인적으로 진행했던 프로젝트들을 소개하는 페이지입니다. 흥미를
            느껴 배웠던 기술을 직접 활용해보고 싶어서 시작한 프로젝트들로
            구성되어 있습니다. 각 프로젝트에서는 HTML, CSS, JavaScript, React 등
            다양한 프론트엔드 기술을 활용하여 효율적인 개발 및 상태 관리를
            경험할 수 있었습니다.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            이러한 개인 프로젝트를 진행하면서 다양한 기술을 탐구하고 적용하는
            과정에서, 구글링을 통한 문제 해결 능력과 여러 라이브러리를
            효율적으로 사용하는 방법을 익히게 되었습니다. 스스로 원하는
            프로젝트를 수행하다 보니 자연스럽게 새로운 도구와 기술을 적용하는 데
            자신감을 얻었습니다. 저는 프론트엔드 개발자로서 이러한 경험을
            바탕으로 더욱 창의적이고 효율적인 웹 솔루션을 제공할 수 있는 역량을
            갖추고 있습니다.
          </motion.p>
        </Modiv>
      </Content>
    </ShowMore>
  );
}

export default Introt;
const Modiv = styled.div`
  width: 1000px;
`;
const Content = styled.div`
  flex: 1;
  max-width: 1000px;
  display: flex;
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
