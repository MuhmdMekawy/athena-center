import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import FooterIcon from '../images/arcticons_canvasstudent.svg'
import CreateNewAcc from './CreateNewAcc'
import SignupFooter from './signupFooter'
import PersonalDetails from './PersonalDetails'
import ParentsDetails from './ParentsDetails'
import EducationDetails from './EducationDetails'
import ContactDetails from './ContactDetails'
import AccountDetails from './AccountDetails'
import SignUpnavbar from './SignUpnavbar'


function Signup(props) {
  return (
    <React.Fragment>
      <div className="signup" style={{direction : props.direction}}>
        <div className="content">
          <SignUpnavbar showBtn={true} lang={props.lang} />
          <div className="bottom">
            <div className="container">
              <Routes>
              <Route path='/' element={<CreateNewAcc lang={props.lang} /> } />
                <Route path='/personal-details' element={<PersonalDetails  lang={props.lang}/>} />
                <Route path='/parent-details' element={<ParentsDetails  lang={props.lang}/>} />
                <Route path='/education-details' element={<EducationDetails  lang={props.lang}/>} />
                <Route path='/contact-details' element={<ContactDetails  lang={props.lang}/>} />
                <Route path='/account-details' element={<AccountDetails  lang={props.lang}/>} />
              </Routes>
              <SignupFooter img={FooterIcon} lang={props.lang} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Signup
