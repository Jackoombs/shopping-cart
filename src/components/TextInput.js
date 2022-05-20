import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function TextInput( {id, name, placeHolder, autocomplete, register, errors, trigger} ) {

  const displayErrors = () => {
    if (errors) return (
      <div className="errors">
        <FontAwesomeIcon icon={faCircleXmark} size="lg" color="rgb(236, 81, 81)"/>
        <p>{errors}</p>
      </div>
    )
  }

  return (
    
    <div className="text-input">
      <label htmlFor={id}>{placeHolder}:</label>
      <input 
        onChange={() => {
          trigger()
        }}
        {...register(name)}
        type="text" 
        id={id}
        name={name}
        placeholder={placeHolder} 
        autocomplete={autocomplete}
      />
      {displayErrors()}
    </div>
  )
}

export default TextInput