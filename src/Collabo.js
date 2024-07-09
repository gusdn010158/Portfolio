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
    "이 페이지는 제가 참여했던 팀 프로젝트의 경험과 느낀 점을 기록한 페이지입니다. 이 프로젝트들은 다양한 프론트엔드, 백엔드 개발자 및 디자이너 등 여러 분야의 전문가들과 협력하여 완성되었습니다. 이러한 협업을 통해 저는 단순한 개발 기술을 넘어, 원활한 소통과 커뮤니케이션의 중요성을 깊이 깨달았습니다. 각각의 아이디어와 관점을 조화롭게 결합하는 과정에서, 창의성과 문제 해결 능력을 더욱 발전시킬 수 있었습니다. 이를 통해 프로젝트의 성공을 이끌어내는 데 필요한 협력의 가치를 실감할 수 있었습니다.";
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
