import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";

const Intr = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Background>
      <TechIcons left>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaReact size={40} color="#61DAFB" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaHtml5 size={40} color="#E34F26" />
        </motion.div>
      </TechIcons>

      <GlowingText
        style={{
          textShadow: `${(mousePosition.x / 50).toFixed(1)}px ${(
            mousePosition.y / 50
          ).toFixed(1)}px 10px rgba(255, 255, 255, 0.5)`,
        }}
      >
        Code. Create. Inspire.
      </GlowingText>

      <TechIcons right>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaCss3Alt size={40} color="#1572B6" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaJs size={40} color="#F7DF1E" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaNodeJs size={40} color="#339933" />
        </motion.div>
      </TechIcons>
    </Background>
  );
};

export default Intr;

const Background = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: url("https://plus.unsplash.com/premium_photo-1661407778170-16015f449ed2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    center/cover no-repeat;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const GlowingText = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  transition: text-shadow 0.1s ease;
  font-family: "Poppins", sans-serif;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const TechIcons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${(props) => (props.left ? "left: 30px;" : "right: 30px;")}
  z-index: 1;

  div {
    transition: transform 0.3s ease-in-out;
  }
`;
