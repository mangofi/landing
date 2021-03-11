import React from "react"


function MangoLogo(props){
console.log(props.ancho);
  var imgsource = "img/mango logo.svg";
  if(props.ancho < 741 ){
    imgsource = "img/mango logo_mobile.svg";
  }

  return (
    <div>
      <img className="mangoLogo bounce" src={imgsource}></img>
    </div>
	)
}

export default MangoLogo
