import React from 'react'
import i18next from 'i18next';


function ContactDetails(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1": "Contact Details",
          "Email Address": "Email Address",
          "Email AddressPlaceHolder" : "What's your Email Address ?",
          "Phone Number" : "Phone Number",
          "Phone NumberPlaceHolder" : "What's your Phone Number?",
          "Home Phone Number" : "Home Phone Number",
          "Home Phone NumberPlaceHolder": "What's your Home Number ?",
          "submitBtn" : "Next Step"
        }
      }, 
      ar: {
        translation: {
          "h1": "معلومات الإتصال",
          "Email Address": "البريد الإلكتروني",
          "Email AddressPlaceHolder" : "ما هو بريدك الإلكتروني ؟",
          "Phone Number" : "رقم الهاتف",
          "Phone NumberPlaceHolder" : "ما هو رقم هاتفك ؟ ",
          "Home Phone Number" : "رقم هاتف المنزل",
          "Home Phone NumberPlaceHolder": "ما هو رقم هاتف المنزل الخاص بك ؟ ",
          "submitBtn" : "الخطوة التالية"
        }
      }
    }
  });
  const handleSubmit = (s) => {
    s.preventDefault()
    window.location.assign('/signup/account-details')
  }
  return (
    <React.Fragment>
      <div className="contactDetails">
        <div className="container">
          <h1>{i18next.t("h1" , {lng : props.lang})}</h1>
          <form action="">
            <div className="input">
              <label htmlFor="Email Address">{i18next.t("Email Address" , {lng : props.lang})}</label>
              <input type="text" id='Email Address' placeholder={i18next.t("Email AddressPlaceHolder" , {lng : props.lang})}/>
            </div>
            <div className="input">
              <label htmlFor="Phone Number">{i18next.t("Phone Number" , {lng : props.lang})}</label>
              <input type="text" id='Phone Number' placeholder={i18next.t("Phone NumberPlaceHolder" , {lng : props.lang})}/>
            </div>
            <div className="input">
              <label htmlFor="Home Phone Number">{i18next.t("Home Phone Number" , {lng : props.lang})}</label>
              <input type="number" id='Home Phone Number' placeholder={i18next.t("Home Phone NumberPlaceHolder" , {lng : props.lang})}/>
            </div>
            <button type='submit' onClick={(s)=>handleSubmit(s)} className='submitBtn'>{i18next.t("submitBtn" , {lng : props.lang})}</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContactDetails
