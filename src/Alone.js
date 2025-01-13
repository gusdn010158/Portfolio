import React, { useEffect, useState, useRef } from "react";
import Top from "./Top";
import styled from "styled-components";
import Intro from "./Intro";
import "./Star.css";
import { Link } from "react-router-dom";
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
            <Link to="/">오늘의 집 클론 사이트</Link>
          </div>
          <div
            className={`d2 ${visibleStates[1] ? "o" : ""}`}
            ref={(el) => (targetsRef.current[1] = el)}
          >
            오늘의 집 클론 프로젝트 이번 프로젝트는 '오늘의 집'을 클론 코딩한
            프로젝트입니다. 이 프로젝트를 통해 다양한 웹 기술을 배우고 활용할 수
            있었습니다. ![Project Screenshot](link-to-screenshot.png) ##
            프로젝트 개요 '오늘의 집'은 인테리어와 라이프스타일을 공유하는
            플랫폼입니다. 이 프로젝트는 사용자들이 다양한 인테리어 아이디어를
            보고, 필요한 제품을 구매할 수 있는 기능을 제공합니다. ## 사용 기술
            스택 - **Frontend**: Next.js, React, Redux, styled-components -
            **Backend**: Node.js, Express - **Database**: MongoDB - **Others**:
            Vercel for deployment, Jest for testing ## 주요 기능 - **홈
            페이지**: 최신 인테리어 트렌드와 인기 제품을 한 눈에 볼 수 있습니다.
            - **검색 기능**: 사용자가 원하는 제품을 쉽게 찾을 수 있습니다. -
            **상품 상세 페이지**: 각 상품에 대한 상세 정보와 관련 리뷰를 확인할
            수 있습니다. - **장바구니 및 결제 시스템**: 사용자가 선택한 제품을
            장바구니에 담고 결제할 수 있습니다. - **사용자 인증**: 회원가입,
            로그인, 로그아웃 기능을 포함합니다. ## 구현 상세 ### 1. 캐러셀 기능
            - 다양한 인테리어 이미지들을 슬라이드 형식으로 보여줍니다. -
            React-slick 라이브러리를 사용하여 부드러운 전환 효과를 구현했습니다.
          </div>
        </PPin>
      </PP>
      <PP>
        <PPin>
          <div
            className={`di ${visibleStates[2] ? "t" : ""}`}
            ref={(el) => (targetsRef.current[2] = el)}
          >
            스타벅스 클론 프로젝트 이번 프로젝트는 '스타벅스' 웹사이트를 클론
            코딩한 프로젝트입니다. 이 프로젝트를 통해 다양한 웹 기술을 배우고
            활용할 수 있었습니다. ![Project Screenshot](link-to-screenshot.png)
            ## 프로젝트 개요 '스타벅스' 웹사이트는 깔끔한 디자인과 다양한
            상호작용을 제공하는 인터페이스로 유명합니다. 이 프로젝트에서는 그
            중에서도 스크롤 애니메이션과 사용자 상호작용을 중점적으로
            구현했습니다. ## 사용 기술 스택 - **Frontend**: Next.js, React,
            Redux, styled-components, JavaScript - **Backend**: Node.js, Express
            - **Database**: MongoDB - **Others**: Vercel for deployment, Jest
            for testing ## 주요 기능 - **홈 페이지**: 스타벅스의 최신 프로모션과
            인기 메뉴를 보여줍니다. - **메뉴 페이지**: 다양한 음료와 푸드를
            카테고리별로 볼 수 있습니다. - **상세 페이지**: 각 메뉴의 상세
            정보를 확인할 수 있습니다. - **장바구니 및 주문 시스템**: 사용자가
            선택한 메뉴를 장바구니에 담고 주문할 수 있습니다. - **사용자 인증**:
            회원가입, 로그인, 로그아웃 기능을 포함합니다. ## 구현 상세 ### 1.
            Intersection Observer를 사용한 스크롤 애니메이션 - 특정 섹션이
            화면에 들어올 때 애니메이션 효과를 주기 위해 Intersection Observer
            API를 사용했습니다. - 스크롤 시 자연스러운 애니메이션 전환을
            구현했습니다.
          </div>
          <div
            className={`di2 ${visibleStates[3] ? "t" : ""}`}
            ref={(el) => (targetsRef.current[3] = el)}
          >
            <Pimg
              src="https://flexible.img.hani.co.kr/flexible/normal/550/307/imgdb/original/2024/0303/20240303501097.jpg"
              alt="1"
            />

            <Link to="https://starbucks-git-master-dlgusdns-projects.vercel.app/">
              스타벅스 클론 사이트
            </Link>
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
            <Link to="/"> 티켓팅 사이트</Link>
          </div>
          <div
            className={`did2 ${visibleStates[5] ? "a" : ""}`}
            ref={(el) => (targetsRef.current[5] = el)}
          >
            티켓팅 사이트 프로젝트 이번 프로젝트는 티켓팅 사이트를 클론 코딩한
            프로젝트입니다. 이 프로젝트를 통해 다양한 웹 기술을 배우고 활용할 수
            있었습니다. ![Project Screenshot](link-to-screenshot.png) ##
            프로젝트 개요 이 프로젝트는 사용자가 다양한 이벤트 티켓을 쉽게
            검색하고 구매할 수 있도록 하는 것을 목표로 합니다. Next.js와 Redux를
            사용하여 효율적인 상태 관리를 구현하였습니다. ## 사용 기술 스택 -
            **Frontend**: Next.js, React, Redux, styled-components, JavaScript -
            **Backend**: Node.js, Express - **Database**: MongoDB - **Others**:
            Vercel for deployment, Jest for testing ## 주요 기능 - **홈
            페이지**: 최신 이벤트와 인기 티켓을 한 눈에 볼 수 있습니다. - **검색
            기능**: 사용자가 원하는 이벤트를 쉽게 찾을 수 있습니다. - **티켓
            상세 페이지**: 각 이벤트 티켓에 대한 상세 정보와 관련 리뷰를 확인할
            수 있습니다. - **장바구니 및 결제 시스템**: 사용자가 선택한 티켓을
            장바구니에 담고 결제할 수 있습니다. - **사용자 인증**: 회원가입,
            로그인, 로그아웃 기능을 포함합니다. ## 구현 상세 ### 1. Next.js를
            사용한 서버사이드 렌더링 (SSR) - 서버사이드 렌더링을 통해 초기 로딩
            속도를 최적화하고 SEO를 향상시켰습니다. - Next.js의
            `getServerSideProps`를 사용하여 페이지 로드 시 데이터를 미리
            가져왔습니다.
          </div>
        </PPin>
      </PP>
      <PP>
        <PPin>
          <div
            className={`didi ${visibleStates[6] ? "q" : ""}`}
            ref={(el) => (targetsRef.current[6] = el)}
          >
            TMDB사이트
          </div>
          <div
            className={`didi2 ${visibleStates[7] ? "q" : ""}`}
            ref={(el) => (targetsRef.current[7] = el)}
          >
            <Pimg
              src="https://flexible.img.hani.co.kr/flexible/normal/550/307/imgdb/original/2024/0303/20240303501097.jpg"
              alt="1"
            />

            <Link to="https://tmdb-dun.vercel.app/">TMDB</Link>
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
