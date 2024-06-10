import React from "react";
import Top from "./Top";
import styled from "styled-components";
function Alone(props) {
  return (
    <>
      <Top />

      <PP>
        <PPin>
          <PPleft>
            <img
              src="https://cdn.hankyung.com/photo/202005/01.22651863.1.jpg"
              alt="1"
            />
            오늘의 집 클론 사이트
          </PPleft>
          <PPright>
            이번 사이트는 오늘의 집을 클론 코딩 해봤습니다 저는 이 프로젝트를
            하면서 next.js를 처음 써봤고 여기에서는 캐러셀 기능과 공통
            컴포넌트등 다양한 기능을 써봤습니다. 기술 스택 뭐시기
          </PPright>
        </PPin>
      </PP>
      <PP>
        <PPin>
          <PPright>
            이번 사이트는 저는 스타벅스를 클론 코딩 해봤습니다. 저는 이
            프로젝트를 하면서 intersection observer를 사용하여 스크롤 기능을
            연습해왔고 js와 뭐시기를 이용해서함
          </PPright>
          <PPleft>
            <img
              src="https://flexible.img.hani.co.kr/flexible/normal/550/307/imgdb/original/2024/0303/20240303501097.jpg"
              alt="1"
            />
            스타벅스 클론 사이트
          </PPleft>
        </PPin>
      </PP>
      <PP>
        <PPin>
          <PPleft>
            <img
              src="https://amunt.kr/files/attach/images/856721/340/874/e0b2c13a73c98afc8d004b982b9bb802.jpg"
              alt="1"
            />
            티켓팅 사이트
          </PPleft>
          <PPright>
            이번 사이트는 티켓팅사이트를 만들어봤습니다 티켓팅이 가능하도록
            하였고 next.js프레임워크를 사용하였고 redux 전체 상태 관리
            라이브러리를 사용하여 연습했습니다.
          </PPright>
        </PPin>
      </PP>
    </>
  );
}

export default Alone;
const PP = styled.div`
  height: 100vh;
  width: 99vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const PPin = styled.div`
  height: 80vh;
  width: 90vw;
  display: flex;
`;
const PPright = styled.div`
  width: 50%;
`;
const PPleft = styled.div`
  width: 50%;
`;
