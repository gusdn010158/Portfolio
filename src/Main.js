import React from "react";

import Top from "./Top";

import Introduce from "./Introduce";
import TwoM from "./TwoM";
import Container from "./Container";
import HeroSection from "./HeroSection";
function Main(props) {
  return (
    <>
      <Top title="PORTFOLIO" />
      <Introduce />
      <TwoM />
      <Container />
      <HeroSection name="그룹 프로젝트로" linkTo="/Collabo" />
    </>
  );
}

export default Main;
