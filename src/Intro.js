import React from "react";
import styled from "styled-components";
function Intro(props) {
  return (
    <ShowMore>
      <Showcom>
        <h2>Introduction</h2>
        <Showdiv>
          안녕하세요, 저는 UI/UX을 최적화하고, 효율적이고 아름다운 웹
          애플리케이션을 구축하는 프론트엔드 개발 지원자입니다.
          <br /> 다양한 기술 스택을 활용하여 복잡한 문제를 창의적으로 해결하는
          데 많은 노력을 합니다.
          <br /> 또한, 최신 웹 개발 트렌드와 도구를 빠르게 습득하고 적용하는
          능력이 강점입니다.
          <br /> 저는 협업과 소통을 중요하게 생각하며, 다양한 팀 프로젝트를 통해
          효과적으로 협력한 경험이 있습니다.
          <br /> 경험을 통해 프로젝트의 목표를 명확히 이해하고, 최고의 결과물을
          도출하기 위해 노력해왔습니다.
          <br />
          혁신적인 프로젝트와 함께 성장하며, 사용자에게 최고의 경험을 제공하는
          데 기여하고 싶습니다.
        </Showdiv>
      </Showcom>
    </ShowMore>
  );
}

export default Intro;
const Showdiv = styled.div`
  width: 1300px;

  font-size: 28px;
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
`;

const Showcom = styled.div`
  width: 1800px;
  height: 300px;
  display: flex;
  justify-content: center;
  h2 {
    font-size: 40px;
    height: 150px;
    margin: 0;
    margin-right: 80px;
  }
`;
