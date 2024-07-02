import React, { useEffect, useState, useRef } from "react";
import Top from "./Top";
import styled from "styled-components";
import Intro from "./Intro";
import "./Star.css";

function Collabo(props) {
  const [visibleStates, setVisibleStates] = useState([]);
  const targetsRef = useRef([]);

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
  const sentence =
    "이 페이지는 제가 팀 프로젝트를 했을때 어떤 것을 했고 어떤 것을 느꼈는지에 대해 적혀있는 페이지입니다. 이 팀페이지들은 혼자가 아니라 다양한 프론트엔드 백엔드 디자이너등 다양한 사람과 다양한 생각이 하나로 협력되는데 큰 노력이 필요하다는 걸 알게 되었고 개발 외에도 커뮤니케이션이 중요하다는 것을 알게 된게 많은 팀 프로젝트들 입니다.";
  const title = "Team Project";

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
            sws는 shall we study라는 약어로 같이 공부할 친구와 중간에 있는
            도서관을 찾아서 공부할수있게 만드는 사이트입니다. 이 사이트는
            중간지점 도서관을 찾거나 전체 도서관 관련에 대해서 볼수있고 같이
            공부할 친구를 찾을수있는 커뮤니티 기능을 가지고 있습니다.
          </div>
          <div
            className={`d2 ${visibleStates[1] ? "o" : ""}`}
            ref={(el) => (targetsRef.current[1] = el)}
          >
            <Pimg
              src="https://cdn.hankyung.com/photo/202005/01.22651863.1.jpg"
              alt="1"
            />
            SWS
          </div>
        </PPin>
      </PP>
      <PP>
        <PPin>
          <div
            className={`di ${visibleStates[2] ? "t" : ""}`}
            ref={(el) => (targetsRef.current[2] = el)}
          >
            <Pimg
              src="https://elearningindustry.com/wp-content/uploads/2023/06/4-Caveats-For-LD-Professionals-When-Using-Chat-GPT.jpg"
              alt="1"
            />
            MOMUKG
          </div>
          <div
            className={`di2 ${visibleStates[3] ? "t" : ""}`}
            ref={(el) => (targetsRef.current[3] = el)}
          >
            이번 사이트는 백엔드와 통신을 한 사이트이고 백엔드와 협업을 배운
            사이트입니다. 이사이트는 챗지피티api를 가져와 챗지피티를 이용하는게
            가능하고 챗지피티에서 검색한 내용이 마이페이지에서 확인할수있는
            기능이 가지고 있습니다.
          </div>
        </PPin>
      </PP>
      <PP>
        <PPin>
          <div
            className={`did ${visibleStates[4] ? "a" : ""}`}
            ref={(el) => (targetsRef.current[4] = el)}
          >
            이번 사이트는 협업 프로젝트로서 운동을 처음 시작하는 사람들을 위한
            커뮤니티, 헬스 용품 쇼핑 사이트입니다. 여기는 처음으로 협업을 했던
            사이트고 figma로 웹 디자이너와 함께 한 프로젝트입니다.
          </div>
          <div
            className={`did2 ${visibleStates[5] ? "a" : ""}`}
            ref={(el) => (targetsRef.current[5] = el)}
          >
            <Pimg
              src="https://cdn.mediatoday.co.kr/news/photo/202210/306491_419306_625.png"
              alt="1"
            />
            헬린이 쇼핑몰
          </div>
        </PPin>
      </PP>
    </>
  );
}

export default Collabo;
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
  justify-content: space-around;
`;
const PPin = styled.div`
  height: 80vh;
  width: 90vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
