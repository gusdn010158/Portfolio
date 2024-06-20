import React, { useEffect, useState, useRef } from "react";
import Top from "./Top";
import styled from "styled-components";
import Intro from "./Intro";
import "./Star.css";

function Alone(props) {
  const [visibleStates, setVisibleStates] = useState([]);
  const targetsRef = useRef([]);
  const sentence =
    "2qdqdqdfsfsfergghaerhejtreefaf dasdfFEWFGEFDSDFSADFA ASFFWEQFSEFQAWFSDFSDF";
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const newVisibleStates = [...visibleStates];
      entries.forEach((entry) => {
        const index = targetsRef.current.indexOf(entry.target);
        if (index > -1) {
          newVisibleStates[index] = entry.isIntersecting;
        }
      });
      setVisibleStates(newVisibleStates);
    });

    targetsRef.current.forEach((target) => {
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      targetsRef.current.forEach((target) => {
        if (target) {
          observer.unobserve(target);
        }
      });
    };
  }, [visibleStates]);
  const title = "Private Project";
  return (
    <>
      <Top title={title} />
      <Intro sentence={sentence} />
      <PP>
        <PPin>
          <div
            className={`d ${visibleStates[0] ? "o" : ""}`}
            ref={(el) => (targetsRef.current[0] = el)}
          >
            <Pimg
              src="https://cdn.hankyung.com/photo/202005/01.22651863.1.jpg"
              alt="1"
            />
            오늘의 집 클론 사이트
          </div>
          <div
            className={`d2 ${visibleStates[1] ? "o" : ""}`}
            ref={(el) => (targetsRef.current[1] = el)}
          >
            이번 사이트는 오늘의 집을 클론 코딩 해봤습니다 저는 이 프로젝트를
            하면서 next.js를 처음 써봤고 여기에서는 캐러셀 기능과 공통
            컴포넌트등 다양한 기능을 써봤습니다. 기술 스택 뭐시기
          </div>
        </PPin>
      </PP>
      <PP>
        <PPin>
          <div
            className={`di ${visibleStates[2] ? "t" : ""}`}
            ref={(el) => (targetsRef.current[2] = el)}
          >
            이번 사이트는 저는 스타벅스를 클론 코딩 해봤습니다. 저는 이
            프로젝트를 하면서 intersection observer를 사용하여 스크롤 기능을
            연습해왔고 js와 뭐시기를 이용해서함
          </div>
          <div
            className={`di2 ${visibleStates[3] ? "t" : ""}`}
            ref={(el) => (targetsRef.current[3] = el)}
          >
            <Pimg
              src="https://flexible.img.hani.co.kr/flexible/normal/550/307/imgdb/original/2024/0303/20240303501097.jpg"
              alt="1"
            />
            스타벅스 클론 사이트
          </div>
        </PPin>
      </PP>
      <PP>
        <PPin>
          <div
            className={`did ${visibleStates[4] ? "a" : ""}`}
            ref={(el) => (targetsRef.current[4] = el)}
          >
            <Pimg
              src="https://amunt.kr/files/attach/images/856721/340/874/e0b2c13a73c98afc8d004b982b9bb802.jpg"
              alt="1"
            />
            티켓팅 사이트
          </div>
          <div
            className={`did2 ${visibleStates[5] ? "a" : ""}`}
            ref={(el) => (targetsRef.current[5] = el)}
          >
            이번 사이트는 티켓팅사이트를 만들어봤습니다 티켓팅이 가능하도록
            하였고 next.js프레임워크를 사용하였고 redux 전체 상태 관리
            라이브러리를 사용하여 연습했습니다.
          </div>
        </PPin>
      </PP>
    </>
  );
}

export default Alone;
const Pimg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
`;
const PP = styled.div`
  height: 100vh;
  width: 99vw;
  display: flex;
  align-items: center;
`;

const PPin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
