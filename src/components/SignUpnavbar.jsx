import React from 'react'
import enLightLogo from "../images/enLightLogo.png"
import arLightLogo from "../images/arLightLogo.png"

function SignUpnavbar(props) {
  return (
    <React.Fragment>
      <div className="SignUpNavbar">
        <div className="container">
          <div className="image">
            {props.lang === "ar" ? 
              <img src={arLightLogo} alt="arLightLogo" loading='lazy' />
              :
              <img src={enLightLogo} alt="enLightLogo" loading='lazy'/>
            }
          </div>
          {props.showBtn === true && (
            <div className="Backbutton">
              <button onClick={()=>window.history.back()}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.2917 14.0105C22.7084 14.4271 22.9084 14.9306 22.8918 15.5209C22.8737 16.1112 22.6563 16.6146 22.2397 17.0313L16.3543 22.9167H47.5834C48.1737 22.9167 48.6688 23.1167 49.0688 23.5167C49.4674 23.9153 49.6667 24.4098 49.6667 25C49.6667 25.5903 49.4674 26.0855 49.0688 26.4855C48.6688 26.8841 48.1737 27.0834 47.5834 27.0834H16.3543L22.2917 33.0209C22.7084 33.4375 22.9168 33.9327 22.9168 34.5063C22.9168 35.0785 22.7084 35.573 22.2917 35.9896C21.8751 36.4063 21.3799 36.6146 20.8063 36.6146C20.2341 36.6146 19.7397 36.4063 19.323 35.9896L9.79176 26.4584C9.58342 26.25 9.4355 26.0244 9.348 25.7813C9.26189 25.5382 9.21883 25.2778 9.21883 25C9.21883 24.7223 9.26189 24.4619 9.348 24.2188C9.4355 23.9757 9.58342 23.75 9.79176 23.5417L19.3751 13.9584C19.757 13.5764 20.2341 13.3855 20.8063 13.3855C21.3799 13.3855 21.8751 13.5938 22.2917 14.0105Z" fill="#4EA7FF"/>
                </svg>
              </button>
            </div>
          )}
          {props.showThemeLangBtn}
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignUpnavbar
