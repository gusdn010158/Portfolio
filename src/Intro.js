import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
function Intro() {
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
            <strong>[팀 프로젝트 경험]</strong>
            학부 시절 제가 참여했던 팀 프로젝트의 경험과 느낀 점을 기록한
            페이지입니다. 이 프로젝트들은 다양한 프론트엔드, 백엔드 개발자 및
            디자이너와 협력하여 완성되었습니다. 이러한 협업을 통해 저는 단순한
            개발 기술을 넘어 원활한 소통과 커뮤니케이션의 중요성을 깊이
            깨달았습니다.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            각각의 아이디어와 관점을 조화롭게 결합하는 과정에서 창의성과 문제
            해결 능력을 더욱 발전시킬 수 있었습니다. 이를 통해 프로젝트의 성공을
            이끌어내는 데 필요한 협력의 가치를 실감할 수 있었습니다.{" "}
            <strong>팀워크</strong> 를 통해 최상의 결과물을 만들어 내는 과정이
            저에게 큰 의미가 있었습니다.
          </motion.p>
        </Modiv>
      </Content>
    </ShowMore>
  );
}

export default Intro;
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
