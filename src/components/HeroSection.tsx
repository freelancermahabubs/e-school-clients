import React from "react";
// Import Swiper React components

// import "./styles.css";
const HeroSection = () => {
  return (
    <div className="slider-and-profile-wrapper">
      <div className="slider-main-wrapper">
        <div className="slider-container">
          <div className="slider" style={{transform: "translateX(0%)"}}>
            <div className="slide">
              <img src="https://i.ibb.co/BGzbPSp/download-1.jpg" alt="Image" />
            </div>

            {/* Add more slides here */}
          </div>
        </div>
        <div className="slider-controls">
          <div className="slider-control" id="prev-slide">
            ❮
          </div>
          <div className="slider-control" id="next-slide">
            ❯
          </div>
        </div>
        <img
          className="slider-overfollow-image"
          src="https://gripetech.com/demo/wp-content/themes/E-School/img/grass.png"
        />
      </div>
      <div className="school-high-profile">
        <div className="two-profile-wrapper">
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src="https://i.ibb.co/7Ch3mVn/Whats-App-Image-2023-10-17-at-19-01-11-555320ae.jpg" />
            </div>
            <div className="profile-details">
              <span className="designation">চেয়ারম্যান</span>
              <span className="profile-name">আব্দুল্লাহ জাহাঙ্গীর</span>
              <span className="read-profile-about">
                <a href="/">
                  তাঁর সম্পর্কে পড়ুন...
                </a>
              </span>
            </div>
          </div>
          <div className="profile-wrapper">
            <div className="profile-image">
              <img src="https://i.ibb.co/7Ch3mVn/Whats-App-Image-2023-10-17-at-19-01-11-555320ae.jpg" />
            </div>
            <div className="profile-details">
              <span className="designation">প্রিন্সিপাল</span>
              <span className="profile-name">জয়নাল আহমেদ</span>
              <span className="read-profile-about">
                <a href="">
                  তাঁর সম্পর্কে পড়ুন...
                </a>
              </span>
            </div>
          </div>
          <div className="class-rutin-and-result">
            <a href="">
              <img src="https://gripetech.com/demo/wp-content/themes/E-School/img/class-routine.png" />{" "}
              ক্লাস রুটিন
            </a>
            <a href="">
              <img src="https://gripetech.com/demo/wp-content/themes/E-School/img/ssc-results.png" />{" "}
              ফলাফল
            </a>
          </div>
          <div className="nnn-school-mini-details-wrapper">
            <ul>
              <li>
                <i className="fa-solid fa-calendar-plus" /> স্থাপিত সন - ১৯৭১
                খ্রিঃ
              </li>
              <li>
                <i aria-hidden="true" className="fas fa-bookmark" />
                EIIN নাম্বার - 12312
              </li>
              <li>
                <i className="fa-solid fa-tty" /> টেলিফোন - ০৫২১900909
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
