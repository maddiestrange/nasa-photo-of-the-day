import React from "react";

export default function NASACard({ imgUrl }) {
  return (
    <div className="NASA-card">
      <img src={imgUrl} style={{ maxWidth: "175px" }} />
    </div>
  );
}
