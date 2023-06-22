import React from 'react'
import maleIcon from '../images/Component 197.png'
import femaleIcon from '../images/Component 198.png'
import i18next from 'i18next';
import { Navigate } from 'react-router-dom';

function PersonalDetails(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1" : "Personal Details",
          "fname" : "First Name",
          "fname-Placeholder" : "What 's your First Name ?",
          "lname" : "Last Name",
          "lname-Placeholder" : "What 's your Last Name ?",
          "mname" : "Middle Name",
          "mname-Placeholder" : "What 's your Middle Name ?",
          "genderLabel" : "Your Gender",
          "dateLabel" : "Date of Birth",
          "dateLabelPlaceholder" : "What 's your Date of Birth ?",
          "addressLabel" : "Full Address",
          "addressLabelPlaceholder": "What's your Full Address ?",
          "submitBtn" : "Next Step"
        }
      }, 
      ar: {
        translation: {
          "h1" : "المعلومات الشخصية",
          "fname" : "الأسم الأول",
          "fname-Placeholder" : "ما هو أسمك الأول ؟",
          "lname" : "الأسم الأخير",
          "lname-Placeholder" : "ما هو لقبك ؟",
          "mname" : "الأسم الأوسط",
          "mname-Placeholder" : "ما هو أسمك الأوسط ؟",
          "genderLabel" : "جنسك",
          "dateLabel" : "تاريخ الميلاد",
          "dateLabelPlaceholder" : "ما هو تاريخ ميلادك ؟",
          "addressLabel" : "العنوان بالكامل",
          "addressLabelPlaceholder": "ما هو عنوانك بالكامل ؟",
          "submitBtn" : "الخطوة التالية"
        }
      }
    }
  });
  const handleSubmit = (s) => {
    s.preventDefault();
    window.location.assign("/signup/parent-details")
  }
  return (
    <React.Fragment>
      <div className="personal-details">
        <h1>{i18next.t("h1" , {lng : `${props.lang}`})}</h1>
        <form action="">
          <div className="upper">
            <div className="left">
              <div className="input">
                <label htmlFor="fName">{i18next.t("fname" , {lng : `${props.lang}`})}</label>
                <input id='fName' type="text" placeholder={i18next.t("fname-Placeholder" , {lng : `${props.lang}`})}/>
              </div>
              <div className="input">
                <label htmlFor="lName">{i18next.t("lname" , {lng : `${props.lang}`})}</label>
                <input id='lName' type="text" placeholder={i18next.t("lname-Placeholder" , {lng : `${props.lang}`})}/>
              </div>
              <div className="input">
                <label htmlFor="mName">{i18next.t("mname" , {lng : `${props.lang}`})}</label>
                <input id='mName' type="text" placeholder={i18next.t("mname-Placeholder" , {lng : `${props.lang}`})}/>
              </div>
            </div>
            <div className="right">
              <div className="input">
                <div className="top">
                  <label>{i18next.t("genderLabel" , {lng : `${props.lang}`})}</label>
                </div>
                <div className="genders">
                <label  htmlFor="male">
                  <img src={maleIcon} alt="male Icon" loading='lazy' />
                </label>
                  <input  type="radio" id='male' name='gender' value="male"/>
                <label htmlFor="female">
                  <img src={femaleIcon} alt="female Icon" loading='lazy' />
                </label>
                  <input  type="radio" id='female' name='gender' value="female"/>
                </div>
              </div>
              <div className="input">
                <label htmlFor="birth">{i18next.t("dateLabel" , {lng : `${props.lang}`})}</label>
                <input type="date" id='birth' placeholder={i18next.t("dateLabelPlaceholder" , {lng : `${props.lang}`})}/>
              </div>
              <div className="input">
                <label htmlFor="address">{i18next.t("addressLabel" , {lng : `${props.lang}`})}</label>
                <input type="text" id='address' placeholder={i18next.t("addressLabelPlaceholder" , {lng : `${props.lang}`})} />
              </div>
            </div>
          </div>
          <button type='submit' className='submitBtn' onClick={(s)=>handleSubmit(s)}>{i18next.t("submitBtn" , {lng : `${props.lang}`})}</button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default PersonalDetails
