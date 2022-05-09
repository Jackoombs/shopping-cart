import React from "react";

function InfoCard({ image, alt, text}) {
  return (
    <div className="info-card">
      <img src={image} alt={alt} />
      <p>{text}</p>
    </div>
  )
}

export default InfoCard