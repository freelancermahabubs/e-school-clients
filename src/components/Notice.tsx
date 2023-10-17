import React from "react";

export default function Notice() {
  return (
    <div className="main-tab-content-wrapper">
      <div className="tabs">
        <button className="tab-btn active-tab-btn">ভর্তি</button>
        <button className="tab-btn">পরীক্ষার রুটিন</button>
      </div>
      {/* Start Tab One */}
      <div className="tab-content" id="tab1" style={{display: "block"}}>
        <div className="downloadable-notice-download-table">
          {" "}
          <div className="postsdfgs">
            <div className="post-datesdfg">
              <i className="fa-solid fa-calendar-days" /> 2023-10-13
            </div>
            <div className="post-titlesdfg">
              <i className="fa-solid fa-plus" /> Admission form
            </div>
            <div className="post-downloadsdfg">
              <a
                href=""
                target="_blank">
                <i className="fa-solid fa-download" /> Download
              </a>
            </div>
          </div>
          <div className="postsdfgs">
            <div className="post-datesdfg">
              <i className="fa-solid fa-calendar-days" /> 2023-09-24
            </div>
            <div className="post-titlesdfg">
              <i className="fa-solid fa-plus" /> Notice 1
            </div>
            <div className="post-downloadsdfg">
              <a
                href=""
                target="_blank">
                <i className="fa-solid fa-download" /> Download
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Tab One */}
      {/* Start Tab Two */}
      <div className="tab-content" id="tab2">
        <div className="downloadable-notice-download-table">
          {" "}
          <div className="postsdfgs">
            <div className="post-datesdfg">
              <i className="fa-solid fa-calendar-days" /> 2023-09-24
            </div>
            <div className="post-titlesdfg">
              <i className="fa-solid fa-plus" /> Notice Exam routine
            </div>
            <div className="post-downloadsdfg">
              <a
                href="/"
                target="_blank">
                <i className="fa-solid fa-download" /> Download
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Tab Two */}
    </div>
  );
}
