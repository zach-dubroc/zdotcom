import React from "react";

function Map() {
  return (
    <div style={{ width: "100%", height: "100vh", border: "none" }}>
      <iframe
        src="https://www.noradsanta.org/embed.html"
        title="NORAD Santa Tracker"
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Map;
