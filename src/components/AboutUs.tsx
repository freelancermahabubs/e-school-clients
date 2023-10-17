import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="last-notice-and-use-link-main-wrapper">
        <div className="last-notice-wrapper">
          <span>সর্বশেষ নোটিশ</span>
          <div className="notice-table">
            <div className="notice-row">
              <div className="notice-date">2023-09-24</div>
              <div className="notice-content">
                <a href="/">
                  বৃহত্তর ছাত্র-ছাত্রীদের সহযোগিতা ও সহযোগিনী প্রশংসা সম্পর্কিত
                </a>
              </div>
            </div>
            <div className="notice-row">
              <div className="notice-date">2023-09-24</div>
              <div className="notice-content">
                <a href="">শ্রদ্ধাশ্রদ্ধ ছাত্র-ছাত্রীদের জন্য নোটিশ</a>
              </div>
            </div>
            <div className="notice-row">
              <div className="notice-date">2023-09-24</div>
              <div className="notice-content">
                <a href="/">নোটিশের প্রসঙ্গে</a>
              </div>
            </div>
            <div className="notice-row">
              <div className="notice-date">2023-09-24</div>
              <div className="notice-content">
                <a href="">ছাত্রীদের দ্বিতীয় সেমেস্টার পরীক্ষা</a>
              </div>
            </div>
          </div>
          <a href="https://gripetech.com/demo/notice-board/">সকল নোটিশ...</a>
        </div>
        <div className="ursefull-links-wrapper">
          <div className="slider-container-quote-t-main-wrapper">
            <span className="teachers-bani-title">শিক্ষক বানী</span>
            {/* start slider card */}

            <div
              className="quote-slide quote-slider-nnasdhgjh"
              style={{display: "block"}}>
              <div className="quote">
                <div className="quote-author-box slide-from-right">
                  <div className="t-quote-image-box">
                    <img
                      src="https://i.ibb.co/7Ch3mVn/Whats-App-Image-2023-10-17-at-19-01-11-555320ae.jpg"
                      style={{maxWidth: 200}}
                    />{" "}
                  </div>
                  <div className="t-quote-details">
                    <span>
                      <i className="fa-solid fa-user" /> Farhan Ahmed
                    </span>
                    <span>
                      <i className="fa-solid fa-pen-nib" /> সহকারী শিক্ষক
                    </span>
                    <span>
                      <i className="fa-solid fa-calendar-days" /> Tuesday,
                      September 26, 2023 | বানী
                    </span>
                  </div>
                </div>
                <div className="quote-main-box slide-from-left">
                  <p>
                    <sup>
                      <i className="fa-solid fa-quote-left" />
                    </sup>
                    তোমারে যে চাহিয়াছে ভুলে একদিন, সে জানে তোমারে ভোলা কি কঠিন
                    <sub>
                      <i className="fa-solid fa-quote-right" />
                    </sub>
                  </p>{" "}
                  <a href="/">পড়ুন...</a>
                </div>
              </div>
            </div>
            {/* end slider card */}
          </div>
        </div>
      </div>

      <div className="questions-and-anser-wrapper">
        <div className="school-qnd">
          <div className="qnada-wrapper">
            <span
              style={{textAlign: "justify", fontSize: "24px"}}
              className="school-questions">
              <img src="https://gripetech.com/demo/wp-content/themes/E-School/img/question-mark.png" />{" "}
              বিদ্যালয়ের স্থাপনার সাল ও ইতিহাস কী
              <span className="">?</span>
            </span>
            <div className="questionanswer">
              <p style={{textAlign: "justify"}}>
                আমাদের বিদ্যালয় সাল ১৯৬৫ সালে প্রতিষ্ঠিত হয়। এটি একটি ঐতিহাসিক
                স্থান, এখানে বেশীরভাগে গুরুত্বপূর্ণ সাক্ষরতা এবং সাংস্কৃতিক গতি
                ঘটে এবং শিক্ষার্থীদের শিক্ষা এবং আদর্শ উন্নত করার মাধ্যমে
                বিদ্যালয়টি এখন একটি প্রতিষ্ঠান হিসেবে পরিচিত। এই বিদ্যালয়ের
                ইতিহাস অত্যন্ত গর্বস্ফূর্তি সাথে দেশের শিক্ষা প্রতিষ্ঠানের মধ্যে
                একটি গুরুত্বপূর্ণ স্থান রয়েছে।
              </p>
              <a href="https://gripetech.com/demo/about-us/">আরও পড়ুন...</a>
            </div>
          </div>
        </div>
        <div className="school-picture-main-wrapper">
          <img
            src="https://i.ibb.co/BGzbPSp/download-1.jpg"
            alt="Institute Photo"
          />
        </div>
      </div>
    </>
  );
}
