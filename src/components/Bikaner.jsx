import React from 'react';

export default function Bikaner() {
  const handleClick = () => {
    window.location.href = 'https://www.figma.com/proto/HKqQ1AXAyjVhtJcMSR5wa5/Figma-end-page?node-id=1-2&p=f&t=T9BKbEQ9qsNYUWD2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'; // Replace this with your Figma link
  };

  return (
    <div onClick={handleClick} className="results">
      <div className="magic">
        Calculating through AI.....
      </div>
      <div id="overlay"></div>
    </div>
  );
}
