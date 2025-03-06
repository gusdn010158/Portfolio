import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import logo from "./img/logo.png";
const fadeInVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const MotionLink = motion(Link);

const Top = ({ title }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <CanvasContainer>
        <Canvas>
          <Stars />
        </Canvas>
      </CanvasContainer>
      <Ttop>
        <Header>
          <Limg src={logo} />
          <Title>{title}</Title>
        </Header>
        <Navigation>
          <NavLink
            to="/"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            About
          </NavLink>
          <NavLink
            to="/Collabo"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            Team Project
          </NavLink>
          <NavLink
            to="/Alone"
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
          >
            Private Project
          </NavLink>
        </Navigation>
      </Ttop>

      <Icon
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <span>HyunWoo's</span>
        <Prospan>{title}</Prospan>
      </Icon>
    </Container>
  );
};
const Ttop = styled.div`
  display: flex;
  width: 1800px;
  justify-content: space-between;
  padding: 0px 150px 0px 50px;
`;
const Container = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0d0d0d, #1a1a40);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CanvasContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Header = styled(motion.header)`
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  color: white;
`;

const Limg = styled.img`
  width: 160px;
  height: 150px;
`;
const Prospan = styled.span`
  font-size: 130px;
  font-weight: 900;
  font-family: Arial, sans-serif;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255, 99, 71, 0.8);
`;

const Navigation = styled.nav`
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  z-index: 1;
`;

const NavLink = styled(MotionLink)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  position: relative;
  transition: color 0.3s ease;
  &:hover {
    color: #ff6347;
    text-shadow: 0 0 10px rgba(255, 99, 71, 0.8);
  }
`;

const Icon = styled(motion.div)`
  width: 100vw;
  margin-left: 50px;
  font-size: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-family: Arial, sans-serif;
  z-index: 1;
  animation: float 3s infinite ease-in-out;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

export default Top;
