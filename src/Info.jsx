import React from 'react'
import "./Info.css"

const Info = ({name,data,width}) => {
  return (
    <div className='info'>
        <p>{name}</p>
        <div style={{width: width}} className="dataDiv">
            {data}
        </div>
    </div>
  )
}

export default Info;