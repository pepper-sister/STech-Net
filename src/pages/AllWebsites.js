import "../styles/allwebsites.css";

import subImage from "../assets/sub.jpg";
import univIcon from "../assets/univ.png";
import potalIcon from "../assets/potal.png";
import campusIcon from "../assets/campus.png";
import bookIcon from "../assets/book.png";
import infoIcon from "../assets/info.png";
import epicIcon from "../assets/epic.png";
import appliIcon from "../assets/appli.png";
import carIcon from "../assets/car.png";

export default function AllWebsites() {
  const goPage = (link) => {
    window.open(`${link}`, "_black");
  };

  return (
    <div className="allwebsites">
      <img className="allwebsites__img" src={subImage} alt="" />

      <div className="allwebsites__feature">
        <button
          className="allwebsites__feature__button"
          onClick={() => goPage("https://www.seoultech.ac.kr/index.jsp")}
        >
          <img src={univIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">서울과학기술대학교 홈페이지</h4>
          <p className="allwebsites__feature__info">
            학교 소개, 입학 정보, 학과 및 연구소 안내 등 전반적인 정보를 제공하는 공식 웹사이트
          </p>
        </button>
        <button
          className="allwebsites__feature__button"
          onClick={() => goPage("https://eclass.seoultech.ac.kr/ilos/main/main_form.acl")}
        >
          <img src={campusIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">서울과학기술대학교 e캠퍼스</h4>
          <p className="allwebsites__feature__info">온라인 강의 수강, 강의 자료 다운로드 및 과제 제출 e-러닝 플랫폼</p>
        </button>
        <button
          className="allwebsites__feature__button"
          onClick={() => goPage("https://suis.seoultech.ac.kr/nxui/index.html")}
        >
          <img src={infoIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">서울과학기술대학교 통합정보</h4>
          <p className="allwebsites__feature__info">학사정보, 학적변동, 성적조회, 수강철회 등 통합 정보 시스템</p>
        </button>
        <button
          className="allwebsites__feature__button"
          onClick={() => goPage("https://for-s.seoultech.ac.kr/view/login.jsp")}
        >
          <img src={appliIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">서울과학기술대학교 수강신청</h4>
          <p className="allwebsites__feature__info">수강 희망 과목을 신청 하는 학부 수강신청 시스템</p>
        </button>
        <button className="allwebsites__feature__button" onClick={() => goPage("https://stportal.seoultech.ac.kr/")}>
          <img src={potalIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">서울과학기술대학교 학생 포털</h4>
          <p className="allwebsites__feature__info">
            등록금 안내 및 고지, 시간표/성적 조회 등 학교 생활 공지 관련 플랫폼
          </p>
        </button>
        <button className="allwebsites__feature__button" onClick={() => goPage("https://library.seoultech.ac.kr/#/")}>
          <img src={bookIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">서울과학기술대학교 도서관</h4>
          <p className="allwebsites__feature__info">
            도서 검색, 열람실 좌석 현황, 전자 자료 열람 등의 서비스를 제공하는 플랫폼
          </p>
        </button>
        <button
          className="allwebsites__feature__button"
          onClick={() =>
            goPage(
              "https://epic.seoultech.ac.kr/common/user/login.do?rtnUrl=8f4d222b9b8edea9acd345835aea594efbe2fd91b58f38dc7634e924e73e51ad"
            )
          }
        >
          <img src={epicIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">서울과학기술대학교 EPiC folio</h4>
          <p className="allwebsites__feature__info">학습을 관리하여 진로설계를 지원하는 역량 통합관리 시스템</p>
        </button>
        <button className="allwebsites__feature__button" onClick={() => goPage("https://mae.seoultech.ac.kr/")}>
          <img src={carIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">기계·자동차공학과 홈페이지</h4>
          <p className="allwebsites__feature__info">기계·자동차공학과의 공지사항과 교과과정을 확인하는 플랫폼</p>
        </button>
      </div>
    </div>
  );
}
