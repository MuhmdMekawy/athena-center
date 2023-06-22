import React, { useEffect, useState } from 'react';
import SignUpnavbar from './SignUpnavbar';
import LedIcon from '../images/Group 482.png';
import Footer from './Footer';
import i18next from 'i18next'
import celebrationVid from '../images/celeb.mp4'
function FinishSignUp(props) {
  const [codeNumber , setCodeNumber] = useState(null)
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1": "Congratulations!",
          "h3" : "Account Created Successfully",
          "h6" : "Your ID Code",
          "p" : "Share Your ID Code With Your Teachers",
          "submitButton" : "Welcome"
        }
      }, 
      ar: {
        translation: {
          "h1": "تهانينا",
          "h3" : "لقد تم إنشاء الحساب بنجاح",
          "h6" : "كود المعرف الخاص بك",
          "p" : "شارك الكود مع المدرسين ",
          "submitButton" : "الرئيسية"
        }
      }
    }
  });
  useEffect(() => {
    setCodeNumber(Math.floor((Math.random() * 5)*100000))
  }, [])
  const handleSubmit = (s) => {
    s.preventDefault()
    window.location.assign('')
  }
  return (
    <React.Fragment>
      <div className="finishSignUp">
        <video src={celebrationVid} loop autoPlay muted></video>
        <div className="container">
          <SignUpnavbar showBtn={false} lang={props.lang} />
          <div className="content">
            <div className="icon">
              <img src={LedIcon} alt="icon for led" />
            </div>
            <h1>{i18next.t("h1" , {lng : props.lang})}</h1>
            <h3>{i18next.t("h3" , {lng : props.lang})}</h3>
            <div className="code" style={{direction : props.direction}}>
              <h6>{i18next.t("h6" , {lng : props.lang})}</h6>
              <h5 className='codeNumber'>#{codeNumber}</h5>
              <p>{i18next.t("p" , {lng : props.lang})}</p>
            </div>
            <button type='submit' onClick={(s)=> handleSubmit(s)} className='submitBtn'>{i18next.t("submitButton" , {lng : props.lang})}</button>
            <Footer lang={props.lang} /> 
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default FinishSignUp
