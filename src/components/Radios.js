import React from 'react';

function Radios(props) {
  
  const radioButtons = props.values.map((value) => {
    let capital = value.charAt(0).toUpperCase() + value.slice(1);
    return(  
      <>
       <input type="radio" id={value} name="variety" value={value} /> {capital} <br />
      </>
    )
  });
  return(
    <div className="mb-1">
      {radioButtons}
    </div>
  )
}

export default Radios;