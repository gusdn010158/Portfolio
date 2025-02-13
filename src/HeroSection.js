import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
function HeroSection({ name, linkTo }) {
  return (
    <HeroSecti>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link className="linkhero" to={linkTo}>
          {name}
        </Link>
      </motion.h1>
    </HeroSecti>
  );
}

export default HeroSection;
const HeroSecti = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  color: white;
  text-align: center;
  padding: 0 20px;
  position: relative;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    position: relative;
    z-index: 1;
    transform: perspective(1000px) rotateX(20deg);
    animation: textEffect 2s ease-out forwards;
  }

  .linkhero {
    display: inline-block;
    color: black;
    text-decoration: none;
    font-size: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

    &:hover {
      color: transparent;
      text-shadow: 0 4px 8px rgba(100, 100, 100, 0.5);
      transform: scale(1.1);
    }
  }

  @keyframes textEffect {
    0% {
      opacity: 0;
      transform: translateY(50px) rotateX(20deg);
    }
    100% {
      opacity: 1;
      transform: translateY(0) rotateX(0);
    }
  }
`;
