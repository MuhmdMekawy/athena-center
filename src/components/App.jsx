import React, { useEffect, useState } from 'react'
import i18next from 'i18next';
import "./style.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Navbar'
import { Routes , Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import PersonalDetails from './PersonalDetails';
import ParentsDetails from './ParentsDetails';
import EducationDetails from './EducationDetails';
import ContactDetails from './ContactDetails';
import AccountDetails from './AccountDetails';
import CodeDetails from './CodeDetails';
import FinishSignUp from './FinishSignUp';
import Login from './Login';
import SignInSendResetCode from './SignInSendResetCode';
import SignInConfirmCode from './SignInConfirmCode';
import SigninSetNewPass from './SigninSetNewPass';
import AthenaHome from './AthenaHome';



function App() {
  // navbar --------------------------------------------------------------------------------------
  const [lang, setLang] = useState(window.localStorage.getItem("lang") || "en")
  const [theme , setTheme] = useState("light")
  const [themeBtnTransform, setThemeBtnTransform] = useState()

  i18next.init({
    lng: 'en',
    // debug: true,
    resources: {
      en: {
        translation: {
          "dir" : "ltr" ,
        }
      }, 
      ar: {
        translation: {
          "dir" : "rtl",
        }
      }
    }
  });
  // store data in cookies
  function setCookie(name,value,exp_days) {
    var d = new Date();
    d.setTime(d.getTime() + (exp_days*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  //handle themes 
  const handleTheme = (theme) => {
    if (theme === "dark") {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
    } else {
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
    }
    const themeBtnTransform = (theme === "light") ? "translateX(-28px)" : "translateX(0px)"
    setThemeBtnTransform(themeBtnTransform)
  }
  const themeBtnTransforminLogin = (theme === "light") ?"translateX(-41px)" : "translateX(-12px)"
  // get data from cookies
  function getCookie(name) {
    var cname = name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(cname) == 0){
            return c.substring(cname.length, c.length);
        }
    }
    return "";
  }
  
  const backgroundThemesButton = window.localStorage.getItem("theme") === "light" ? "white" : "linear-gradient(264.31deg, #1C8EFF 0%, #6DB7FF 95.46%)"
  const handleLanguage = (lang) => {
    window.localStorage.setItem("lang", lang)
    setLang(lang)
  }
  useEffect(() => {
    if (window.localStorage.getItem("theme") === "light") {
      document.body.style.backgroundColor = "#fff"
      document.documentElement.style.setProperty('--navbar-before-background', 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%), linear-gradient(90deg, rgba(51, 243, 255, 0.3) 0%, rgba(137, 135, 255, 0.3) 48.96%, rgba(184, 67, 255, 0.3) 100%)');
      document.documentElement.style.setProperty('--navbar-before-boxshadow', '0px 0px 50px rgba(78, 167, 255, 0.25)');
      document.documentElement.style.setProperty('--navbar-svg-color', '#4EA7FF');
    } else {
      document.body.style.backgroundColor = "#001C37" 
      document.documentElement.style.setProperty('--navbar-before-background', ' linear-gradient(180deg, rgba(0, 46, 90, 0) 0%, #002E5A 100%), linear-gradient(90deg, rgba(51, 243, 255, 0.3) 0%, rgba(137, 135, 255, 0.3) 48.96%, rgba(184, 67, 255, 0.3) 100%)');
      document.documentElement.style.setProperty('--navbar-before-boxshadow', '0px 0px 50px rgba(0, 46, 90, 0.25)');
      document.documentElement.style.setProperty('--navbar-svg-color', '#fff');
    }
  } , [window.localStorage.getItem("theme")])
  // navbar --------------------------------------------------------------------------------------
  return (
    <React.Fragment>
      {/* <Navbar
        handleTheme={handleTheme}
        theme={window.localStorage.getItem("theme")}
        setTheme={setTheme}
        lang={lang}
        handleLanguage={handleLanguage}
        themeBtnTransform={themeBtnTransform}
        backgroundThemesButton={backgroundThemesButton}
        direction={i18next.t('dir' , {lng : `${lang}`})}
      /> */}
      <Routes>
        <Route path='/' element={
            <Home
              lang={lang}
              themeBtnTransform={themeBtnTransform}
              backgroundThemesButton={backgroundThemesButton}
              theme={window.localStorage.getItem("theme")}
              handleLanguage={handleLanguage} 
              direction={i18next.t('dir', { lng: `${lang}` })}
            
            />
          }
        />
        <Route path='/signup' element={
            <Signup
              lang={lang}
              direction={i18next.t('dir' , {lng : `${lang}`})}
            />
          }
        >
          <Route path='/signup/personal-details' element={<PersonalDetails />} />
          <Route path='/signup/parent-details' element={<ParentsDetails />} />
          <Route path='/signup/education-details' element={<EducationDetails />} />
          <Route path='/signup/contact-details' element={<ContactDetails />} />
          <Route path='/signup/account-details' element={<AccountDetails />} />
        </Route>
        <Route path='/code-details' element={<CodeDetails lang={lang} />} />
        <Route path='/finishsignup' element={<FinishSignUp direction={i18next.t('dir', { lng: `${lang}` })} lang={lang} />} />
        <Route path='login' element={
            <Login
              lang={lang}
              handleTheme={handleTheme}
              theme={window.localStorage.getItem("theme")}
              setTheme={setTheme}
              handleLanguage={handleLanguage}
              themeBtnTransforminLogin={themeBtnTransforminLogin}
              backgroundThemesButton={backgroundThemesButton}
              direction={i18next.t('dir' , {lng : `${lang}`})}
            />
          }
        />
        <Route path='/sendresetcode' element={<SignInSendResetCode lang={lang}  direction={i18next.t('dir' , {lng : `${lang}`})}/>} />
        <Route path='/confirmresetcode' element={<SignInConfirmCode lang={lang} direction={i18next.t('dir' , {lng : `${lang}`})}/>} />
        <Route path='/setnewpass' element={<SigninSetNewPass lang={lang} direction={i18next.t('dir' , {lng : `${lang}`})}/>} />
        <Route path='/athenahomepage' element={
          <AthenaHome
            handleTheme={handleTheme}
            theme={window.localStorage.getItem("theme")}
            setTheme={setTheme}
            lang={lang}
            handleLanguage={handleLanguage}
            themeBtnTransform={themeBtnTransform}
            backgroundThemesButton={backgroundThemesButton}
            direction={i18next.t('dir' , {lng : `${lang}`})}
          />
        } />
        <Route path='/home' element={<Navigate to='/' />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
