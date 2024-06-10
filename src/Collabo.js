import React from "react";
import Top from "./Top";
import styled from "styled-components";
function Collabo(props) {
  return (
    <>
      <Top />
      <TP>SWS</TP>
      <TP>MOMUKG</TP>
      <TP>헬린이 쇼핑몰</TP>
    </>
  );
}

export default Collabo;
const TP = styled.div`
  height: 100vh;
  width: 99vw;
`;
