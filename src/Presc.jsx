import React from 'react'
import Info from './Info'
import "./Presc.css"
import logo from "./assets/logo.png"

const Presc = ({patientName,patientAge,patientGender,patientAddress,patientNotes,patientMedicine,Date}) => {
    

    return (
    <div className='presc'>
    <div className="prescInside">
        <div className="header">
        <h1>Birla Hospital</h1>
        <div className="doctorInfo">
        <h3>Dr. John Killer <span>M.B.B.S.,M.S.(Ortho)</span></h3>
        <div className="doctorAddress">
            <p>751 Victoria 123 Street, South Statue 204</p>
            <p>Hometown US 1234</p>
            <p>PH:(207)808 2014 2014</p>
            <p>FAX:(207)808 2015 2202</p>
        </div>

        </div>

        </div>
        <div className="middle">
        <div className="srN">
        <Info name="S. NO.:" data="1" width="100px"/>
        </div>
        <div className="PatientInfo">
            <Info name="Patient Name:" data={patientName} width="189px" />
            <Info name="Age:" data={patientAge}  width="50px"/>
            <Info name="Gender:" data={patientGender}  width="50px"/>
        </div>
        <div className="PatientInfo">
            <Info name="Address:" data={patientAddress} width="229px" />
            <Info name="Date:" data={Date} width="120px" />
        </div>
        <img src={logo} alt="" />
        <div className="Notes">
        <h4>Patient Notes:</h4>
            {patientNotes}
            </div>
         <div className="Medicine">
         <h4>Patient Medicine:</h4>

            {patientMedicine}
         </div>   
         
         <div className="doctorSignature">

         <p>Doctor's Signature:</p>
         <div className="signature">
            <p>John Killer</p>
         </div>
         </div>
        </div>
        <div className="footer">
            <p>www.hospitalmail@mail.com</p>
        </div>
    </div>

    </div>
  )
}

export default Presc