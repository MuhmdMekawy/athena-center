import React from 'react'
import avatar from '../images/Group 448.png'
import { Link } from 'react-router-dom'
import i18next from 'i18next';


function CreateNewAcc(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "h1" : "Create a New Account" ,
          "h6" : "Upload Your Profile Picture" ,
          "f-li" : "Your picture must be clear and belong to you" ,
          "s-li" : "Students who uploading fake profile pics will be banned" ,
          "th-li" : "Upload your pic only in square size 500*500px" ,
          "btn" : "Next Step" ,
        }
      }, 
      ar: {
        translation: {
          "h1" : "إنشاء حساب جديد" ,
          "h6" : "قم بتحميل صورة ملفك الشخصي" ,
          "f-li" : "يجب أن تكون صورتك واضحة وتنتمي إليك",
          "s-li" : " سيتم حظر الطلاب الذين يقومون بتحميل صور مزيفة لا تنتمي إليهم" ,
          "th-li" : " قم بتحميل صورتك فقط بحجم مربع 500 * 500 بكسل"  ,
          "btn" : "الخطوة التالية" ,
        }
      }
    }
  });
  return (
    <React.Fragment>
      <div className="createNewAcc">
        <div className="content">
          <h1>{i18next.t("h1" , {lng : `${props.lang}`})}</h1>
          <h6>{i18next.t("h6" , {lng : `${props.lang}`})}</h6>
          <label htmlFor="uploadImage">
            <img src={avatar} alt="avataricon" loading='lazy'/>
          </label>
          <input type="file" id='uploadImage' required/>
          <ul>
            <li>{i18next.t("f-li" , {lng : `${props.lang}`})}</li>
            <li>{i18next.t("s-li" , {lng : `${props.lang}`})}</li>
            <li>{i18next.t("th-li" , {lng : `${props.lang}`})}</li>
          </ul>
          <Link to='/signup/personal-details'><button>{i18next.t("btn" , {lng : `${props.lang}`})}</button></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CreateNewAcc
