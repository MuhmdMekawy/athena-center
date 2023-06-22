import React from 'react'
import i18next from 'i18next';

function Footer(props) {
  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "rights" : "All Rights Reserved - Copyright © 2023 Athena Students Gate"
        }
      }, 
      ar: {
        translation: {
          "rights" : "جميع الحقوق محفوظة - حقوق الطبع والنشر © 2023 بوابة أثينا للطلاب",
        }
      }
    }
  });
  return (
    <React.Fragment>
      <div className="footer">
        <div className="container">
          <div className="content">
            <small>{i18next.t('rights' , {lng : `${props.lang}`})}</small>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
