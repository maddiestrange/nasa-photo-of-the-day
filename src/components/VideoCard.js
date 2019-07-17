import React from "react";

export default function NASACard({ vidUrl }) {
  return (
    <div className="video-card">
        <iframe width="960" title='idk' height="540" src={vidUrl} frameBorder="0" allowFullScreen="" allow="autoplay; encrypted-media; gyroscope; picture-in-picture">...</iframe>
    </div>
  );
}