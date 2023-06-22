import React from 'react'
import enLightLogo from "../images/enLightLogo.png"
import arLightLogo from "../images/arLightLogo.png"
import signupImage from "../images/signup_image.png"
import { Link } from 'react-router-dom'
import Footer from './Footer'
import i18next from 'i18next';


function Home(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h5" : "Hello! Welcome To ",
          "h3" : "Students Gate",
          "p" : "By registering on Athens Platform as a new student, you agree to the use of all your data by the teachers in the platform, and to the",
          "pLink" : " Privacy Policy and Terms of Service",
          "button" : "Get Started",
          "h6" : "Already have an account ? ",
          "h6Link" : "Sign In",
        }
      }, 
      ar: {
        translation: {
          "h5" : "مرحبًا! بكم في",
          "h3" : "بوابة الطلاب",
          "p" : "من خلال التسجيل في منصة أثينا كطالب جديد ، فإنك توافق على استخدام جميع بياناتك من قبل المعلمين في المنصة ، ",
          "pLink" : "وعلى سياسة الخصوصية وشروط الخدمة",
          "button" : "ابدأ الان",
          "h6" : "هل لديك حساب ؟ ",
          "h6Link" : "تسجيل الدخول",
        }
      }
    }
  });
  return (
    <React.Fragment>
      <div className="home" style={{direction : props.direction}}>
        <div className="container">
          <div className="top">
            <div className="image">
              {props.lang === "ar" ? 
                <img src={arLightLogo} alt="arLightLogo" loading='lazy' />
                :
                <img src={enLightLogo} alt="enLightLogo" loading='lazy'/>
              }
            </div>
            <div className="buttons">
              <div className="language-control">
                  {props.lang === "ar" ?
                    <button onClick={()=>props.handleLanguage("en")}>
                      <p>English</p>
                    </button>
                    :
                      <button onClick={()=>props.handleLanguage("ar")}>
                        <p>العربية</p>
                      </button>
                  } 
                </div>
            </div>
          </div>
          <div className="bottom">
            <div className="details">
              <h5>{i18next.t("h5" , {lng : `${props.lang}`})}</h5>
              <h3>{i18next.t("h3" , {lng : `${props.lang}`})}</h3>
              <p>{i18next.t("p" , {lng : `${props.lang}`})}<Link to=''>
              {i18next.t("pLink" , {lng : `${props.lang}`})}</Link></p>
              <div className="signup_button">
                <Link to='/signup'><button>{i18next.t("button" , {lng : `${props.lang}`})}</button></Link>
                <h6>{i18next.t("h6" , {lng : `${props.lang}`})}<Link to=''><span>{i18next.t("h6Link" , {lng : `${props.lang}`})}</span> </Link></h6>
              </div>
            </div>
            <div className="image">
              <img src={signupImage} alt="signup image" loading='lazy'/>
            </div>
          </div>
          <Footer lang={props.lang} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
