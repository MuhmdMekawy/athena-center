import React from 'react'
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import img from '../images/Group 427 1.png'
import Footer from './Footer'

function SignInSendResetCode(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1" : "Reset Password",
          "p" : "Enter your email address that you register with to receive your reset password code, check your email box",
          "emailLabel" : "Registered Email",
          "emailLabelPlaceholder" : "Enter your Registration Email ?",
          "btn" : "Send Code",
          "trylog" : "Try login again ?",
          "loginLink": " Click here",
          "haventAcc" : "Don't have an account ?",
          "Join" : "Join Us",
        }
      }, 
      ar: {
        translation: {
          "h1" : "إعادة تعيين كلمة المرور",
          "p" : "أدخل عنوان بريدك الإلكتروني الذي قمت بالتسجيل به لتتلقى رمز إعادة تعيين كلمة المرور، تفقد صندوق البريد الإلكتروني الخاص بك",
          "emailLabel" : "البريد الإلكتروني المسجل",
          "emailLabelPlaceholder" : "قم بإدخال بريدك الإلكتروني ؟",
          "btn" : "إرسال الرمز",
          "trylog" : "حاول تسجيل الدخول مرة أخرى ؟",
          "loginLink": "اضغط هنا",
          "haventAcc" : "ليس لديك حساب ؟ ",
          "Join" : "إنضم الأن",
        }
      }
    }
  });
  const handleSubmit = (event , url) => {
    event.preventDefault()
    window.location.assign(url)
  }
  return (
    <React.Fragment>
      <div className="resetpass" style={{direction: props.direction}}>
        <Navbar
          showhomeNavbarBtn={false}
          showThemeLangBtns={false}
          showJoinUsBtn={true}
          lang={props.lang}
          handleTheme={props.handleTheme}
          themeBtnTransform={props.themeBtnTransform}
          handleLanguage={props.handleLanguage}
          direction={props.direction}
          theme={props.theme}
          backgroundThemesButton={props.backgroundThemesButton}
        />
        <div className="container">
          <div className="conten">
          <div className="text">
            <h1>{i18next.t("h1" , {lng : props.lang})}</h1>
            <p>{i18next.t("p" , {lng : props.lang})}</p>
              <form action="">
                <div className="input">
                  <label htmlFor="email">{i18next.t("emailLabel" , {lng : props.lang})}</label>
                  <input id='email' type="email" placeholder={i18next.t("emailLabelPlaceholder" , {lng : props.lang})} autoFocus required/>
                </div>
                  <button type='submit' onClick={(event , url)=>handleSubmit(event , '/confirmresetcode')} className="submitBtn special">{i18next.t("btn" , {lng : props.lang})}</button>
                <p>{i18next.t("trylog", { lng: props.lang })} <span><Link to='/login'>{i18next.t("loginLink", { lng: props.lang })}</Link></span></p>
              </form>
            </div>
            <div className="image">
              <img src={img} alt="students" loading='lazy'/>
            </div>
          </div>
        <div className="linkwithbtnrespon">
          <p>{i18next.t("haventAcc" , {lng : props.lang})}</p>
          <button  onClick={(event , url)=>handleSubmit(event , '/')}>{i18next.t("Join" , {lng : props.lang})}</button>
        </div>
        </div>
        <Footer lang={props.lang} />
      </div>
    </React.Fragment>
  )
}

export default SignInSendResetCode
