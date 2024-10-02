import React, { useState, useEffect } from 'react';
import './home.css';
import mainImage from './main.jpg';
import univIcon from './univ.png';
import potalIcon from './potal.png';
import campusIcon from './campus.png';
import bookIcon from './book.png';

const Home = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      let currentTime = new Date();
      currentTime.setSeconds(currentTime.getSeconds() + 1.1);

      const hours = String(currentTime.getHours()).padStart(2, '0');
      const minutes = String(currentTime.getMinutes()).padStart(2, '0');
      const seconds = String(currentTime.getSeconds()).padStart(2, '0');

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 10);

    return () => clearInterval(intervalId);
  }, []);

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

  return (
    <div>
      <main>
        <div className="main-section">
          <div className="mainimg-section">
            <img src={mainImage} alt="" />
            <div className="clock-container">
              <div className="clock-section">학교 서버시간</div>
              <h2 id="clock" className="clock">{time}</h2>
            </div>
          </div>

          <div className="mainside-bar">
            <button className="mainsidebar-button" onClick={goToSeoulTechHomepage}>
              <img src={univIcon} alt="" className="icon" />
              과기대 홈페이지
            </button>
            <button className="mainsidebar-button" onClick={goToSeoulTechPortal}>
              <img src={potalIcon} alt="" className="icon" />
              과기대 포털
            </button>
            <button className="mainsidebar-button" onClick={goToeCampus}>
              <img src={campusIcon} alt="" className="icon" />
              e캠퍼스
            </button>
            <button className="mainsidebar-button" onClick={goToLibrary}>
              <img src={bookIcon} alt="" className="icon" />
              ST LIBRARY
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;