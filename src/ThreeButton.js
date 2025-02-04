import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function ThreeButton({ selcet, onClick }) {
  return (
    <ButtonContainer>
      <StyledButton
        as={motion.button}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#56CCF2", // Hover 시 배경색 변경
        }}
        whileTap={{
          scale: 0.98,
          backgroundColor: "#2D9CDB", // 클릭 시 색상 변경
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        onClick={onClick}
      >
        {selcet}
      </StyledButton>
    </ButtonContainer>
  );
}

export default ThreeButton;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 16px 32px;
  font-size: 16px;
  color: white;
  margin: 10px;
  background-color: #2d9cdb;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  outline: none;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  display: inline-block;
  transform: translateZ(0);
  user-select: none;
`;
