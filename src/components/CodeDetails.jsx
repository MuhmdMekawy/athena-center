import React from 'react'
import i18next from 'i18next'
import CircleIcon from '../images/arcticons_canvasstudent.png'
import SignUpNavbar from './SignUpnavbar';
import Footer from './Footer';
function CodeDetails(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1": "Generate your ID Code",
          "submitButton" : "Generate"
        }
      }, 
      ar: {
        translation: {
          "h1" : "إنشاء كود المعرف الخاص بك" ,
          "submitButton" : "إنشاء"
        }
      }
    }
  });
  const handleSubmit = (s) => {
    s.preventDefault()
    window.location.assign('/finishsignup')
  }
  return (
    <React.Fragment>
      <div className="codeDetails">
        <div className="container">
          <SignUpNavbar  showBtn={true} lang={props.lang} />
          <div className="content">
            <h1>{i18next.t("h1" , {lng : props.lang})}</h1>
            <div className="icon">
              <img src={CircleIcon} alt="icon" loading='lazy' />
            </div>
            <button type='submit' onClick={(s)=> handleSubmit(s)} className='submitBtn'>{i18next.t("submitButton" , {lng : props.lang})}</button>
          </div>
          <Footer lang={props.lang} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default CodeDetails
