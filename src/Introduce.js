import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <strong>[꺾이지 않는 마음]</strong>
          안녕하세요, 저는 UI/UX을 최적화하고, 효율적이고 아름다운
          웹애플리케이션을 구축하는 프론트엔드 개발 지원자입니다. 다양한 기술
          스택을 활용하여 복잡한 문제를 창의적으로 해결하는데 많은 노력을
          합니다. 또한, 최신 웹 개발 트렌드와 도구를 빠르게 습득하고
          적용하는능력이 강점입니다.저는 협업과 소통을 중요하게 생각하며, 다양한
          팀 프로젝트를 통해효과적으로 협력한 경험이 있습니다. 경험을 통해
          프로젝트의 목표를 명확히 이해하고, 최고의 결과물을도출하기 위해
          노력해왔습니다. 혁신적인 프로젝트와 함께 성장하며, 사용자에게 최고의
          경험을 제공하는 데 기여하고 싶습니다.
          <strong>"해결할 수 없는 문제는 없다"</strong>는 확신을 가지게
          되었습니다. 이로써, 꺾이지 않는 마음으로 어떤 문제든 극복할 수 있다는
          자신감을 얻게 되었습니다.
        </motion.p>
      </Content>

      <ProfileImage>
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJTlEJUI4JUVCJUFDJUJDJUVDJTgyJUFDJUVDJUE3JTg0aHl8ZW58MHx8MHx8fDA%3D"
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

// 스타일 정의
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

const ProfileImage = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;

  img {
    width: 250px;
    height: 250px;
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
