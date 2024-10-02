import React from 'react';
import './allwebsites.css';
import subImage from './sub.jpg';
import univIcon from './univ.png';
import potalIcon from './potal.png';
import campusIcon from './campus.png';
import bookIcon from './book.png';
import infoIcon from './info.png';
import epicIcon from './epic.png';
import appliIcon from './appli.png';
import carIcon from './car.png';

function All_websites() {
  const goToSeoulTechHomepage = () => {
    window.open('https://www.seoultech.ac.kr/index.jsp', '_blank');
  };

  const goToSeoulTechPortal = () => {
    window.open('https://stportal.seoultech.ac.kr/', '_blank');
  };

  const goToeCampus = () => {
    window.open('https://eclass.seoultech.ac.kr/ilos/main/main_form.acl', '_blank');
  };

  const goToLibrary = () => {
    window.open('https://library.seoultech.ac.kr/#/', '_blank');
  };

  const goToSuis = () => {
    window.open('https://suis.seoultech.ac.kr/nxui/index.html', '_blank');
  };

  const goToCourse = () => {
    window.open('https://for-s.seoultech.ac.kr/view/login.jsp', '_blank');
  };

  const goToEpic = () => {
    window.open('https://epic.seoultech.ac.kr/common/user/login.do?rtnUrl=8f4d222b9b8edea9acd345835aea594efbe2fd91b58f38dc7634e924e73e51ad', '_blank');
  };

  const goToCar = () => {
    window.open('https://mae.seoultech.ac.kr/', '_blank');
  };

  return (
    <div>
      <main>
        <div className="sub-section">
          <div className="subimg-section">
            <img src={subImage} alt="" />
          </div>

          <div className="sidebar-section">
            <div className="side-bar1">
              <button className="sidebar1-button" onClick={goToSeoulTechHomepage}>
                <img src={univIcon} alt="" className="icon2" />
                서울과학기술대학교 홈페이지
                <p>
                  학교 소개, 입학 정보, 학과 및 연구소 안내 등
                  <br />
                  전반적인 정보를 제공하는 공식 웹사이트
                </p>
              </button>
              <button className="sidebar1-button" onClick={goToeCampus}>
                <img src={campusIcon} alt="" className="icon2" />
                서울과학기술대학교 e캠퍼스
                <p>
                  온라인 강의 수강, 강의 자료 다운로드 및
                  <br />
                  과제 제출 e-러닝 플랫폼
                </p>
              </button>
              <button className="sidebar1-button" onClick={goToSuis}>
                <img src={infoIcon} alt="" className="icon2" />
                서울과학기술대학교 통합정보
                <p>
                  학사정보, 학적변동, 성적조회, 수강철회 등
                  <br />
                  통합 정보 시스템
                </p>
              </button>
              <button className="sidebar1-button" onClick={goToCourse}>
                <img src={appliIcon} alt="" className="icon2" />
                서울과학기술대학교 수강신청
                <p>
                  수강 희망 과목을 신청 하는
                  <br />
                  학부 수강신청 시스템
                </p>
              </button>
            </div>

            <div className="side-bar2">
              <button className="sidebar2-button" onClick={goToSeoulTechPortal}>
                <img src={potalIcon} alt="" className="icon2" />
                서울과학기술대학교 포털
                <p>
                  등록금 안내 및 고지, 시간표/성적 조회 등
                  <br />
                  학교 생활 공지 관련 플랫폼
                </p>
              </button>
              <button className="sidebar2-button" onClick={goToLibrary}>
                <img src={bookIcon} alt="" className="icon2" />
                서울과학기술대학교 도서관
                <p>
                  도서 검색, 열람실 좌석 현황,
                  <br />
                  전자 자료 열람 등의 서비스를 제공하는 플랫폼
                </p>
              </button>
              <button className="sidebar2-button" onClick={goToEpic}>
                <img src={epicIcon} alt="" className="icon2" />
                서울과학기술대학교 EPiC folio
                <p>
                  학습을 관리하여 진로설계를 지원하는
                  <br />
                  역량 통합관리 시스템
                </p>
              </button>
              <button className="sidebar2-button" onClick={goToCar}>
                <img src={carIcon} alt="" className="icon2" />
                기계·자동차공학과 홈페이지
                <p>
                  기계·자동차공학과의 공지사항과
                  <br />
                  교과과정을 확인하는 플랫폼
                </p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default All_websites;