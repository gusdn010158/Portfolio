import React, { useEffect, useState, useRef } from "react";
import Top from "./Top";
import styled from "styled-components";
import Intro from "./Intro";
import "./Star.css";
import { Link } from "react-router-dom";
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
            <Link className="lind" to="https://sws-frontend-theta.vercel.app/">
              {" "}
              SWS
            </Link>
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

            <Link className="lind" to="https://momukg-front.vercel.app/">
              MOMUKG
            </Link>
          </div>
          <div
            className={`di2 ${visibleStates[3] ? "t" : ""}`}
            ref={(el) => (targetsRef.current[3] = el)}
          >
            챗지피티 통합 티켓팅 사이트 프로젝트 이번 프로젝트는 백엔드와의
            통신을 통해 챗지피티 API를 통합한 티켓팅 사이트를 클론 코딩한
            프로젝트입니다. 이 프로젝트를 통해 다양한 웹 기술을 배우고 활용할 수
            있었습니다. ![Project Screenshot](link-to-screenshot.png) ##
            프로젝트 개요 이 프로젝트는 사용자가 다양한 이벤트 티켓을 검색하고
            구매할 수 있는 기능을 제공하며, 챗지피티 API를 통합하여 사용자가
            질문을 하고 답변을 받을 수 있는 기능을 포함합니다. 또한, 사용자가
            챗지피티에서 검색한 내용을 마이페이지에서 확인할 수 있습니다. ##
            사용 기술 스택 - **Frontend**: Next.js, React, Redux,
            styled-components, JavaScript - **Backend**: Node.js, Express -
            **Database**: MongoDB - **Others**: Vercel for deployment, Jest for
            testing, OpenAI GPT-3 API ## 주요 기능 - **홈 페이지**: 최신
            이벤트와 인기 티켓을 한 눈에 볼 수 있습니다. - **검색 기능**:
            사용자가 원하는 이벤트를 쉽게 찾을 수 있습니다. - **티켓 상세
            페이지**: 각 이벤트 티켓에 대한 상세 정보와 관련 리뷰를 확인할 수
            있습니다. - **장바구니 및 결제 시스템**: 사용자가 선택한 티켓을
            장바구니에 담고 결제할 수 있습니다. - **챗지피티 통합**: 사용자가
            챗지피티 API를 통해 질문을 하고 답변을 받을 수 있습니다. -
            **마이페이지**: 사용자가 챗지피티에서 검색한 내용을 확인할 수
            있습니다. - **사용자 인증**: 회원가입, 로그인, 로그아웃 기능을
            포함합니다. ## 구현 상세 ### 1. Next.js를 사용한 서버사이드 렌더링
            (SSR) - 서버사이드 렌더링을 통해 초기 로딩 속도를 최적화하고 SEO를
            향상시켰습니다. - Next.js의 `getServerSideProps`를 사용하여 페이지
            로드 시 데이터를 미리 가져왔습니다.
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
            <Link className="lind" to="https://health-three-pearl.vercel.app/">
              헬린이 쇼핑몰
            </Link>
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
  object-fit: cover;
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
