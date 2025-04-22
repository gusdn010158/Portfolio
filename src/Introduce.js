import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Lee from "./img/hyunwoo.jpg";
const Introduce = () => {
  return (
    <Container>
      <Content>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <strong>[도전 정신]</strong>
          안녕하세요, 저는 UI/UX 최적화를 통해 효율적이고 아름다운 웹을 구축하는
          개발자입니다. 다양한 기술 스택을 활용하여 복잡한 문제를 창의적으로
          해결하는 데 많은 노력을 기울이고 있습니다. 협업과 소통을 중요하게
          생각하며, 다양한 팀 프로젝트에서 효과적으로 협력한 경험이 있습니다.
          프로젝트 목표를 명확히 이해하고, 최고의 결과물을 도출하기 위해
          끊임없이 노력해왔습니다. <strong>"일단 해보자"</strong>는 도전 정신이
          저의 가장 큰 강점입니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <strong>[웹 개발에 대한 열정]</strong>
          학부생 시절부터 웹 개발에 흥미를 가지고 HTML, CSS, JavaScript를
          학습했으며, 이후 React와 Next.js를 활용한 프로젝트를 통해 더욱 깊이
          있는 개발 경험을 쌓았습니다. 결과물이 바로 보이는 프론트엔드 개발에서
          뿌듯함을 느끼며, 새로운 프로젝트를 시작할 때마다 기존 기술을 강화하고
          최신 기술을 적용하여 효율적인 개발을 추구하고 있습니다. 웹 접근성과
          반응형 웹 구현에 대한 지속적인 학습을 통해 더 많은 사용자에게 편리한
          서비스를 제공하기 위해 노력하고 있습니다. 이러한 경험을 바탕으로
          디자인과 개발을 모두 이해하고 구현할 수 있는 개발자로 성장하고자
          합니다.
        </motion.p>
      </Content>

      <ProfileImage>
        <motion.img
          src={Lee}
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        />
      </ProfileImage>
    </Container>
  );
};

export default Introduce;

const Container = styled.section`
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 10%;
  gap: 50px;
  background-color: #111;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 800px;

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

const ProfileImage = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;

  img {
    width: 350px;
    height: 450px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #00bfff;
  }

  @media (max-width: 768px) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
