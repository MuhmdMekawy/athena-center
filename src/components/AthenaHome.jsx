import React from 'react'
import Navbar from './Navbar'
import avatar from '../images/info.png'
import athenahand from '../images/Layer 2.png'


function AthenaHome(props) {
  return (
    <React.Fragment>
      <div className="athena-homepage" style={{direction : props.direction}}>
        <Navbar
          showhomeNavbarBtn={true}
          handleTheme={props.handleTheme}
          theme={props.theme}
          setTheme={props.setTheme}
          lang={props.lang}
          handleLanguage={props.handleLanguage}
          themeBtnTransform={props.themeBtnTransform}
          backgroundThemesButton={props.backgroundThemesButton}
          direction={props.direction}
        />
        <div className="container">
          <div className="content">
            <div className="first-sec">
              <h1>Good Morning, Marwan</h1>
              <div className="cont">
                <div className="image">
                  <img src={avatar} alt="avatart img" loading='lazy'/>
                </div>
                <div className="tabs">
                  <div className="tab1">
                    <div className="numb">
                      <div className="icon">
                        <svg viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2797_10982"  maskUnits="userSpaceOnUse" x="0" y="0" width="15" height="16">
                        <path d="M7.75 14.8699C11.478 14.8699 14.5 11.7651 14.5 7.93493C14.5 4.10477 11.478 1 7.75 1C4.02198 1 1 4.10477 1 7.93493C1 11.7651 4.02198 14.8699 7.75 14.8699Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.0376 9.66915V6.20168L6.0626 7.24192L7.7501 4.8147L9.4376 7.24192L11.4626 6.20168V9.66915H4.0376Z" fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                        </mask>
                        <g mask="url(#mask0_2797_10982)">
                        <path d="M-0.350098 -0.385986H15.8499V16.2579H-0.350098V-0.385986Z" fill="#E8F3FF"/>
                        </g>
                        </svg>
                      </div>
                      <p>#25</p>
                    </div>
                    <h3 className="text">Coming Soon</h3>
                  </div>
                  <div className="tab2"><span>Your ID Code</span><div className='code'><p>#M5F12D</p></div></div>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src={athenahand} alt="icon" loading='lazy' />
                  </div>
                  <div className="text">
                    <h4>Athena Hands</h4>
                    <h5>A round of high-level questions Try our digital MCQ form</h5>
                    <button className='submitBtn special'>Discover</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AthenaHome
