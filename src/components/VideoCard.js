import React from "react";

export default function NASACard({ vidUrl }) {
  return (
    <div className="NASA-card">
      <iframe src={vidUrl}/>
    </div>
  );
}