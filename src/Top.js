// import React from "react";
// import styled from "styled-components";
// import logo from "./img/logo.png";
// import { Link } from "react-router-dom";
// import { AiOutlineFileZip } from "react-icons/ai";
// import { Canvas } from "@react-three/fiber";
// import { Stars } from "@react-three/drei";

// const Component = styled.div`
//   text-align: center;
//   position: relative;
//   overflow: hidden;
//   height: 100vh;
//   background: #000;
// `;

// const StyledCanvas = styled(Canvas)`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
// `;

// const Maintop = styled(Component)`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

// const Proicon = styled.div`
//   font-size: 230px;
//   width: 370px;
//   height: 400px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Prorg = styled.div`
//   color: white;
//   font-size: 60px;
//   font-weight: 700;
//   height: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-direction: column;
// `;

// const Pro = styled.div`
//   display: flex;

//   position: absolute;
//   z-index: 1; /* 텍스트를 캔버스 위에 배치 */
//   color: #fff;
//   bottom: 0%;
//   left: 0%;
// `;

// const Prospan = styled.span`
//   font-size: 130px;
//   font-weight: 900;
// `;

// const Header = styled(Link)`
//   text-decoration: none;
//   color: white;
//   margin-right: 50px;
//   width: 300px;
//   height: 200px;
//   font-size: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-direction: column;
// `;

// const Logo = styled(Header)`
//   margin-right: 250px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Soge = styled(Header)`
//   margin-left: 80px;
//   margin-right: 0;
// `;

// const Abouttop = styled(Header)`
//   width: 230px;
// `;

// const Big = styled(Header)`
//   width: 300px;
// `;

// const Small = styled(Header)``;

// const SS = styled.div`
//   font-size: 14px;
//   display: flex;
//   text-align: left;
// `;

// const Tope = styled.div`
//   display: flex;
//   position: absolute;
//   z-index: 1;
//   color: #fff;

//   top: 0%;
//   left: 0%;
// `;

// const Limg = styled.img`
//   width: 160px;
//   height: 150px;
// `;

// const Bigfont = styled.div`
//   font-size: 45px;
// `;

// function Top({ title }) {
//   return (
//     <Maintop>
//       <StyledCanvas>
//         <Stars />
//       </StyledCanvas>
//       <Tope>
//         <Logo>
//           <Limg src={logo} />
//         </Logo>
//         <Abouttop to="/">
//           <Bigfont>About</Bigfont>
//           <SS>page represents the introduction, skills, and vision of me.</SS>
//         </Abouttop>
//         <Big to="/Collabo">
//           <Bigfont>Team Project</Bigfont>
//           <SS>
//             This page introduces collaborative projects <br /> with team
//             members.
//           </SS>
//         </Big>
//         <Small to="/Alone">
//           <Bigfont>Private Project</Bigfont>
//           <SS>
//             This page is about a personal project that <br /> I personally
//             covered.
//           </SS>
//         </Small>
//         <Soge>
//           <Bigfont>Front-End</Bigfont>
//           <Bigfont> Developer</Bigfont>
//         </Soge>
//       </Tope>
//       <Pro>
//         <Proicon>
//           <AiOutlineFileZip />
//         </Proicon>
//         <Prorg>
//           <span>HyunWoo's</span>
//           <Prospan>{title} </Prospan>
//         </Prorg>
//       </Pro>
//     </Maintop>
//   );
// }

// export default Top;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineFileZip } from "react-icons/ai";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const Component = styled.div`
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 100vh;
  background: #000;
`;

const StyledCanvas = styled(Canvas)`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Maintop = styled(Component)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Proicon = styled(motion.div)`
  font-size: 230px;
  width: 370px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Prorg = styled(motion.div)`
  color: white;
  font-size: 60px;
  font-weight: 700;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Pro = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  color: #fff;
  bottom: 0%;
  left: 0%;
`;

const Prospan = styled.span`
  font-size: 130px;
  font-weight: 900;
`;

const Header = styled(motion(Link))`
  text-decoration: none;
  color: white;
  margin-right: 50px;
  width: 300px;
  height: 200px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Logo = styled(Header)`
  margin-right: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Soge = styled(Header)`
  margin-left: 80px;
  margin-right: 0;
`;

const Abouttop = styled(Header)`
  width: 230px;
`;

const Big = styled(Header)`
  width: 300px;
`;

const Small = styled(Header)``;

const SS = styled.div`
  font-size: 14px;
  display: flex;
  text-align: left;
`;

const Tope = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  color: #fff;
  top: 0%;
  left: 0%;
`;

const Limg = styled.img`
  width: 160px;
  height: 150px;
`;

const Bigfont = styled.div`
  font-size: 45px;
`;

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 }, // 천천히 나타나도록 설정
  },
};

function Top({ title }) {
  const [delay1, setDelay1] = useState(false);
  const [delay2, setDelay2] = useState(false);
  const [delay3, setDelay3] = useState(false);
  const [delay4, setDelay4] = useState(false);
  const [delay5, setDelay5] = useState(false);
  const [delay6, setDelay6] = useState(false);
  const [delay7, setDelay7] = useState(false);

  useEffect(() => {
    setTimeout(() => setDelay1(true), 100);
    setTimeout(() => setDelay2(true), 300);
    setTimeout(() => setDelay3(true), 600);
    setTimeout(() => setDelay4(true), 900);
    setTimeout(() => setDelay5(true), 1200);
    setTimeout(() => setDelay6(true), 1500);
    setTimeout(() => setDelay7(true), 1800);
  }, []);

  return (
    <Maintop>
      <StyledCanvas>
        <Stars />
      </StyledCanvas>
      <Tope>
        <Logo
          to="/"
          initial="hidden"
          animate={delay1 ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <Limg src={logo} />
        </Logo>
        <Abouttop
          to="/"
          initial="hidden"
          animate={delay2 ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <Bigfont>About</Bigfont>
          <SS>page represents the introduction, skills, and vision of me.</SS>
        </Abouttop>
        <Big
          to="/Collabo"
          initial="hidden"
          animate={delay3 ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <Bigfont>Team Project</Bigfont>
          <SS>
            This page introduces collaborative projects <br /> with team
            members.
          </SS>
        </Big>
        <Small
          to="/Alone"
          initial="hidden"
          animate={delay4 ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <Bigfont>Private Project</Bigfont>
          <SS>
            This page is about a personal project that <br /> I personally
            covered.
          </SS>
        </Small>
        <Soge
          initial="hidden"
          animate={delay5 ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <Bigfont>Front-End</Bigfont>
          <Bigfont> Developer</Bigfont>
        </Soge>
      </Tope>
      <Pro>
        <Proicon
          initial="hidden"
          animate={delay6 ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <AiOutlineFileZip />
        </Proicon>
        <Prorg
          initial="hidden"
          animate={delay7 ? "visible" : "hidden"}
          variants={fadeInVariants}
        >
          <span>HyunWoo's</span>
          <Prospan>{title}</Prospan>
        </Prorg>
      </Pro>
    </Maintop>
  );
}

export default Top;
