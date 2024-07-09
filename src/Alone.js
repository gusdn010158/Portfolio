import React, { useEffect, useState, useRef } from "react";
import Top from "./Top";
import styled from "styled-components";
import Intro from "./Intro";
import "./Star.css";

function Alone(props) {
  const [visibleStates, setVisibleStates] = useState([]);
  const targetsRef = useRef([]);
  const sentence =
    "이 페이지는 제가 개인적으로 진행했던 프로젝트들을 소개하고 있습니다. 제가 흥미를 느껴 직접 만들어보고 싶었던 페이지들로 구성되어 있습니다. 각 프로젝트에서는 주로 HTML, CSS, JavaScript, React 등 다양한 프론트엔드 기술을 사용하였습니다. 이를 통해 다음과 같은 기술을 습득하고 숙달할 수 있었습니다:HTML/CSS: 웹 페이지의 구조와 스타일링을 효과적으로 구현하는 방법.JavaScript: 동적인 사용자 인터페이스와 기능 구현.React: 컴포넌트 기반의 효율적인 개발 및 상태 관리.이러한 개인 프로젝트를 진행하면서 다양한 기술을 탐구하고 적용하는 과정을 통해, 구글링을 통한 문제 해결 및 여러 라이브러리의 효율적인 사용 방법을 익히게 되었습니다. 스스로 하고 싶은 프로젝트를 수행하다 보니, 자연스럽게 새로운 도구와 기술을 적용하는 데 자신감을 얻을 수 있었습니다.저는 프론트엔드 개발자로서, 이러한 경험을 바탕으로 더욱 창의적이고 효율적인 웹 솔루션을 제공할 수 있게 되었습니다.";
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
