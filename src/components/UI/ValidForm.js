import React from "react";
import './ValidForm.css'

function ValidForm (props) {
  return (
    <div>
      <div className='backdrop' onClick={props.onConfirm}/>
      <div className='modal card'>
        <header className='shmeader'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'><h3>{props.message}</h3></div>
        <footer className='actions'>
          <button className="button" onClick={props.onConfirm}> Ok </button>
        </footer>
      </div>
    </div>
  )
}

export default ValidForm