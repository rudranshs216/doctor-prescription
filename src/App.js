import React, { useState } from "react";
import './App.css';
import Presc from "./Presc";

function App() {
    const [date,setDate] =  useState(new Date().toISOString().slice(0,10));
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    patientName: "",
    patientAge: "",
    patientGender: "",
    patientAddress: "",
    patientNotes: "",
    patientMedicine: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target
    let update = { ...data, [name]: value }
    setData(update);
  }
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <div className="app">
      {!open ? <>
        <h1>Birla Hospital</h1>
        <h3>Dr. John Killer <span>M.B.B.S., M.S.(Ortho)</span></h3>
        <div className="inputDiv">
          <form>
            <input placeholder="Patient Name" name="patientName" value={data.patientName} onChange={handleChange} type="text" />
            <input placeholder="Patient Age" name="patientAge" value={data.patientAge} onChange={handleChange} type="number" />
            <input placeholder="Patient Gender" name="patientGender" value={data.patientGender} onChange={handleChange} type="text" />
            <input type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} id="" />
            <br />
            <textarea placeholder="Patient Address" name="patientAddress" value={data.patientAddress} onChange={handleChange} id="" cols="30" rows="5"></textarea>
            <textarea placeholder="Patient Notes" name="patientNotes" value={data.patientNotes} onChange={handleChange} id="" cols="30" rows="5"></textarea>
            <textarea placeholder="Patient Medicine" name="patientMedicine" value={data.patientMedicine} onChange={handleChange} id="" cols="30" rows="5"></textarea>
            <br />
            <button onClick={handleClick}>Submit</button>

          </form>
        </div>
      </> : <Presc
            patientName={data.patientName}
            patientAge={data.patientAge}
            patientGender={data.patientGender}
            patientAddress={data.patientAddress}
            patientNotes={data.patientNotes}
            patientMedicine={data.patientMedicine}
            Date = {date}
             />
      }

    </div>
  );
}

export default App;
