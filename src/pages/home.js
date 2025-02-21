import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import mainImage from '../assets/main.jpg';
import univIcon from '../assets/univ.png';
import potalIcon from '../assets/potal.png';
import campusIcon from '../assets/campus.png';
import bookIcon from '../assets/book.png';

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
        <div class="main-section">
          <div class="mainimg-section">
            <img src={mainImage} alt="" />
            <div class="clock-container">
              <div class="clock-section">학교 서버시간</div>
              <h2 id="clock" class="clock">{time}</h2>
            </div>
          </div>

          <div class="mainside-bar">
            <button class="mainsidebar-button" onClick={goToSeoulTechHomepage}>
              <img src={univIcon} alt="" class="icon" />
              과기대 홈페이지
            </button>
            <button class="mainsidebar-button" onClick={goToSeoulTechPortal}>
              <img src={potalIcon} alt="" class="icon" />
              과기대 포털
            </button>
            <button class="mainsidebar-button" onClick={goToeCampus}>
              <img src={campusIcon} alt="" class="icon" />
              e캠퍼스
            </button>
            <button class="mainsidebar-button" onClick={goToLibrary}>
              <img src={bookIcon} alt="" class="icon" />
              ST LIBRARY
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;