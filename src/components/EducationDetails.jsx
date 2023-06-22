import React from 'react'
import i18next from 'i18next'


function EducationDetails(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1": "Education Details",
          "school": "School",
          "schoolPlaceHolder" : "What's your School ?",
          "studentLevel" : "Study Level",
          "studentLevelPlaceHolder" : "What's your Study Level ?",
          "scientificdevision" : "Scientific Division",
          "scientificdevisionPlaceHolder": "Select your Scientific Division ?",
          "submitBtn" : "Next Step"
        }
      }, 
      ar: {
        translation: {
          "h1": "معلومات التعليم",
          "school": "المدرسة",
          "schoolPlaceHolder" : "ما هي مدرستك ؟",
          "studentLevel" : "المستوى التعليمي",
          "studentLevelPlaceHolder" : "ما هو الصف الدراسي الخاص بك ؟ ",
          "scientificdevision" : "الشعبة العلمية",
          "scientificdevisionPlaceHolder": "ما هي الشعبة العلمية الخاصة بك ؟ ",
          "submitBtn" : "الخطوة التالية"
        }
      }
    }
  });
  const handleSubmit = (s) => {
    s.preventDefault()
    window.location.assign('/signup/contact-details')
  }
  return (
    <React.Fragment>
      <div className="educationDetails">
        <div className="container">
          <h1>{i18next.t("h1" , {lng : props.lang})}</h1>
          <form action="">
            <div className="input">
              <label htmlFor="school">{i18next.t("school" , {lng : props.lang})}</label>
              <input type="text" id='school' placeholder={i18next.t("schoolPlaceHolder", { lng: props.lang })} />
            </div>
            <div className="input">
              <label htmlFor="studentLevel">{i18next.t("studentLevel" , {lng : props.lang})}</label>
              <select name="studentLevel" id="studentLevel">
                <option value="" selected>{i18next.t("studentLevelPlaceHolder", { lng: props.lang })}</option>
                <option value="" >-</option>
                <option value="" >-</option>
              </select>
            </div>
            <div className="input">
              <label htmlFor="scientificdevision">{i18next.t("scientificdevision" , {lng : props.lang})}</label>
              <select name="scientificdevision" id="scientificdevision">
                <option value="" selected>{i18next.t("scientificdevisionPlaceHolder", { lng: props.lang })}</option>
                <option value="" >-</option>
                <option value="" >-</option>
              </select>
            </div>
            <button type='submit' onClick={(s)=>handleSubmit(s)} className='submitBtn'>{i18next.t("submitBtn" , {lng : props.lang})}</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default EducationDetails
