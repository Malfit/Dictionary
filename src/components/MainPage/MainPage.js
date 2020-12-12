import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from '../../assets/Welcome-Sticky-Note.png';
import ABC from '../../assets/6f333bf5198053737bc2f93e4f539f9d.png';
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="mainPageWrapper">
      <div className="welcomeImgWrapper">
        <img src={Welcome} alt="welcomeImg" className="welcomeImg" />
      </div>
      <div className="abcImgWrapper">
        <img src={ABC} alt="abc" className="abcImg" />
      </div>
      <Link to='/practice' className="linkTo">
        <div className="btnLetsStartWrapper">
          <div className="btnLetsStart">
            Let's start !
          </div>
        </div>
      </Link>
      <div className="poweredByWrapper">
        <div className="poweredBy">Powered by Rybakov Aleksandr</div>
      </div> 
    </div>
  )
}

export default MainPage
