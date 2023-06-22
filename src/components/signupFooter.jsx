import React from 'react'
import i18next from 'i18next';


function SignupFooter(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "text" : "All Rights Reserved - Copyright © 2023 Athena Students Gate",
        }
      }, 
      ar: {
        translation: {
          "text" : "جميع الحقوق محفوظة - حقوق الطبع والنشر © 2023 بوابة أثينا للطلاب" ,
        }
      }
    }
  });
  return (
    <React.Fragment>
      <div className="signup-footer">
        <h6><div className='icon'><img src={props.img} alt="signup icon" loading='lazy' /></div>{i18next.t("text" , {lng : `${props.lang}`})}</h6>
      </div>
    </React.Fragment>
  )
}

export default SignupFooter
