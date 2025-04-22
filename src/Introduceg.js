import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Introduceg = ({ title, text, textwo }) => {
  return (
    <ShowMore>
      <Content>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {title}
        </motion.h2>

        <Modiv>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: text }}
          />

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: textwo }}
          />
        </Modiv>
      </Content>
    </ShowMore>
  );
};

export default Introduceg;

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
