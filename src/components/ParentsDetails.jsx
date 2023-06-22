import i18next from 'i18next'
import React from 'react'

function ParentsDetails(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1": "Parents Details",
          "parentName": "Parent's Name",
          "parentNamePlaceHolder" : "What's your Parent Name ?",
          "parentJob" : "Parent's Job",
          "parentJobPlaceHolder" : "What's your Parent Job ?",
          "parentPhone" : "Parent's Phone Number",
          "parentPhonePlaceHolder": "What's your Parent's Phone Number ?",
          "submitBtn" : "Next Step"
        }
      }, 
      ar: {
        translation: {
          "h1": "معلومات ولي الأمر",
          "parentName": "أسم الوالد/الوالدة",
          "parentNamePlaceHolder" : "ما هو أسم والدك/والدتك ؟",
          "parentJob" : "وظيفة الوالد/الوالدة",
          "parentJobPlaceHolder" : "ما هي وظيفة والدك/والدتك ؟",
          "parentPhone" : "رقم هاتف والدك/والدتك",
          "parentPhonePlaceHolder": "ما هو رقم هاتف والدك/والدتك ؟",
          "submitBtn" : "الخطوة التالية"
        }
      }
    }
  });
  const handleSubmit = (s) => {
    s.preventDefault()
    window.location.assign('/signup/education-details')
  }
  return (
    <React.Fragment>
      <div className="parentsDetails">
        <div className="container">
          <h1>{i18next.t("h1" , {lng : props.lang})}</h1>
          <form action="">
            <div className="input">
              <label htmlFor="parentName">{i18next.t("parentName" , {lng : props.lang})}</label>
              <input type="text" id='parentName' placeholder={i18next.t("parentNamePlaceHolder" , {lng : props.lang})}/>
            </div>
            <div className="input">
              <label htmlFor="parentJob">{i18next.t("parentJob" , {lng : props.lang})}</label>
              <input type="text" id='parentJob' placeholder={i18next.t("parentJobPlaceHolder" , {lng : props.lang})}/>
            </div>
            <div className="input">
              <label htmlFor="parentPhone">{i18next.t("parentPhone" , {lng : props.lang})}</label>
              <input type="number" id='parentPhone' placeholder={i18next.t("parentPhonePlaceHolder" , {lng : props.lang})}/>
            </div>
            <button type='submit' onClick={(s)=>handleSubmit(s)} className='submitBtn'>{i18next.t("submitBtn" , {lng : props.lang})}</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ParentsDetails
