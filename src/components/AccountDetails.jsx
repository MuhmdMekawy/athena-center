import React, { useState } from 'react'
import i18next from 'i18next'
import { Link } from 'react-router-dom';
import openEye from "../images/Vector (2).svg";
import closeEye from '../images/Vector (3).svg'

function AccountDetails(props) {
  const [passInputState, setPassInputState] = useState("password")
  const [passConfirmState, setPassConfirmState] = useState("password")
  

  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1": "Account Information",
          "Username": "Username",
          "UsernamePlaceHolder" : "Create a Username",
          "Password" : "Password",
          "PasswordPlaceHolder" : "Create a Password",
          "Confirm Password" : "Confirm Password",
          "Confirm PasswordPlaceHolder": "Confirm your Password",
          "checkBox": "I am 13 years of age or older and agree to ",
          "checkBox-Link1": "the Privacy Policy",
          "and" : " and " ,
          "checkBox-Link2" : "Terms of Service",
          "submitBtn" : "Final Step"
        }
      }, 
      ar: {
        translation: {
          "h1": "معلومات الحساب",
          "Username": "أسم المستخدم",
          "UsernamePlaceHolder" : "قم بإنشاء أسم المستخدم ؟",
          "Password" : "الرقم السري",
          "PasswordPlaceHolder" : "قم بإنشاء الرقم السري ",
          "Confirm Password" : "تأكيد الرقم السري",
          "Confirm PasswordPlaceHolder": "قم بتأكيد الرقم السري",
          "checkBox" : "عمري 13 عاما أو أكثر وأوافق على ",
          "checkBox-Link1": "سياسة الخصوصية",
          "and" : " و " ,
          "checkBox-Link2" : "شروط الخدمة",
          "submitBtn" : "الخطوة الأخيرة"
        }
      }
    }
  });
  const EyeIconTransform = props.lang === "ar" ? "translateX(32px)" : "translateX(-32px)"
  const handleSubmit = (s) => {
    s.preventDefault()
    window.location.assign('/code-details')
  }
  return (
    <React.Fragment>
      <div className="accountDetails">
        <div className="container">
          <h1>{i18next.t("h1" , {lng : props.lang})}</h1>
          <form action="">
            <div className="input">
              <label htmlFor="Username">{i18next.t("Username" , {lng : props.lang})}</label>
              <input type="text" id='Username' placeholder={i18next.t("UsernamePlaceHolder" , {lng : props.lang})}/>
            </div>
            <div className="input">
              <label htmlFor="Password">{i18next.t("Password", { lng: props.lang })}</label>
              <div className="inputWithIcon">
                <input type={passInputState} id='Password' placeholder={i18next.t("PasswordPlaceHolder", { lng: props.lang })} />
                {passInputState === "password" ?
                  <img style={{transform: EyeIconTransform}} onClick={()=>setPassInputState("text")} src={closeEye} alt="openEyeIcon" loading='lazy' />
                :
                  <img style={{transform: EyeIconTransform}} onClick={()=>setPassInputState("password")} src={openEye} alt="closeEyeIcon" loading='lazy' />
                }
              </div>
            </div>
            <div className="input">
              <label htmlFor="Confirm Password">{i18next.t("Confirm Password" , {lng : props.lang})}</label>
              <div className="inputWithIcon">
                <input type={passConfirmState} id='Confirm Password' placeholder={i18next.t("Confirm PasswordPlaceHolder", { lng: props.lang })} />
                {passConfirmState === "password" ?
                  <img style={{transform : EyeIconTransform}} onClick={()=>setPassConfirmState("text")} src={closeEye} alt="openEyeIcon" loading='lazy' />
                :
                  <img style={{transform: EyeIconTransform}} onClick={()=>setPassConfirmState("password")} src={openEye} alt="closeEyeIcon" loading='lazy' />
                }
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id='checkbox'/>
              <label htmlFor="checkbox">{i18next.t("checkBox", { lng: props.lang })} <span><Link to=''>{i18next.t("checkBox-Link1", { lng: props.lang })}</Link></span>{i18next.t("and" , {lng:props.lang})}<span><Link to=''>{i18next.t("checkBox-Link2" , {lng : props.lang})}</Link></span></label>
            </div>
            <button type='submit' onClick={(s)=>handleSubmit(s)} className='submitBtn'>{i18next.t("submitBtn" , {lng : props.lang})}</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AccountDetails
