import React from "react";

export default function Adress() {
  return (
    <div className="main-wrapper">
      <div className="wrapper">
        {/* start google map */}
        {/* Container for the map iframe */}
        <h2 className="school-topper-here" style={{marginBottom: 0}}>
          আমাদের ঠিকানা
        </h2>
        <div className="adress-iframe-text-nnn">
          <span className="address-text-bar-iframe-nn">
            <i className="fa-solid fa-location-dot" /> প্রধান সড়ক, কাচারী বাজার,
            রংপুর সদর, রংপুর <span>(5400)</span>
          </span>
        </div>
        <div id="map-container">
          {/* Embed Google Maps using iframe */}
          <iframe
            id="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14301.487166254203!2d89.0243555!3d26.3468342!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3742216baeaad0x462d964983c4d456!2sPatgramTaraknath(T.N)SchoolCollege!5e0!3m2!1sen!2sbd!4v1695574910408!5m2!1sen!2sbd"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* end google map */}
      </div>
    </div>
  );
}
