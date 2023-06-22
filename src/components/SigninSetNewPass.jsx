import React from 'react'
import i18next from 'i18next';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import img from '../images/Group 427 1.png'
import Footer from './Footer'


function SigninSetNewPass(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1" : "Reset Password",
          "p" : "Enter a new password",
          "setnewpass" : "New Password",
          "setnewpassPlaceholder" : "Create a New Password",
          "confirmnewpass" : "Confirm Password",
          "confirmnewpassPlaceholder" : "Confirm your New Password",
          "btn" : "Reset Password",
          "trylog" : "Try login again ?",
          "loginLink": " Click here",
          "haventAcc" : "Don't have an account ?",
          "Join" : "Join Us",
        }
      }, 
      ar: {
        translation: {
          "h1" : "تعيين كلمة المرور الجديدة",
          "p" : "أدخل كلمة المرور الجديدة",
          "setnewpass" : "أدخل كلمة المرور الجديدة",
          "setnewpassPlaceholder" : "إنشاء كلمة مرور جديدة",
          "confirmnewpass" : "تأكيد كلمة المرور الجديدة",
          "confirmnewpassPlaceholder" : "قم بتأكيد كلمة المرور الجديدة",
          "btn" : "إعادة تعيين كلمة المرور",
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
      <div className="confirmcode" style={{direction: props.direction}}>
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
                  <label htmlFor="setpassword">{i18next.t("setnewpass" , {lng : props.lang})}</label>
                  <input id='setpassword' type="password" placeholder={i18next.t("setnewpassPlaceholder" , {lng : props.lang})} autoFocus required/>
                </div>
                <div className="input">
                  <label htmlFor="confirmpassword">{i18next.t("confirmnewpass" , {lng : props.lang})}</label>
                  <input id='confirmpassword' type="password" placeholder={i18next.t("confirmnewpassPlaceholder" , {lng : props.lang})} required/>
                </div>
                  <button type='submit'  onClick={(event , url)=>handleSubmit(event , '/athenahomepage')} className="submitBtn special">{i18next.t("btn" , {lng : props.lang})}</button>
                  <p>{i18next.t("trylog", { lng: props.lang })} <span><Link to='/login'>{i18next.t("loginLink", { lng: props.lang })}</Link></span></p>
              </form>
            </div>
            <div className="image">
              <img src={img} alt="students" loading='lazy'/>
            </div>
          </div>
          <div className="linkwithbtnrespon">
            <p>{i18next.t("haventAcc" , {lng : props.lang})}</p>
            <button type='submit' onClick={(event , url)=>handleSubmit(event , '/login')}>{i18next.t("Join" , {lng : props.lang})}</button>
          </div>
        </div>
        <Footer lang={props.lang} />
      </div>
    </React.Fragment>
  )
}

export default SigninSetNewPass
