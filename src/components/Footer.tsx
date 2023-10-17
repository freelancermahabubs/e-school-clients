export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrapper">
          <div
            className="footer-design-img aos-init aos-animate"
            data-aos="slide-up">
            <img src="https://gripetech.com/demo/wp-content/themes/E-School/img/grass-footer.png" />
          </div>
        </div>
        <div className="main-wrapper main-footer-wrapper">
          <div className="wrapper">
            <div className="footer-widgets-main-wrraper">
              <div className="footer-widget aos-init" data-aos="slide-up">
                <h2>যোগাযোগ</h2>
                <ul>
                  <li>
                    <i className="fa-regular fa-envelope" />
                    <a href="mailto:onlineworkerbdd@gmail.com" target="_blank">
                      {" "}
                      onlineworkerbdd@gmail.com
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" />
                    <a href="tel:০৫২১900909" target="_blank">
                      {" "}
                      ০৫২১900909
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-location-dot" /> প্রধান সড়ক,
                    কাচারী বাজার, রংপুর সদর, রংপুর (5400)
                  </li>
                </ul>
              </div>
              {/* start footer widget */}
              <div className="footer-widget aos-init" data-aos="slide-up">
                <h2>ফুটার ১</h2>
                <div className="menu-footer-1-container">
                  <ul id="menu-footer-1" className="menu">
                    <li
                      id="menu-item-119"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-119">
                      <a href="#">মুজিব কর্নার</a>
                    </li>
                    <li
                      id="menu-item-120"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-120">
                      <a href="#">নোটিসবোর্ড</a>
                    </li>
                    <li
                      id="menu-item-121"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-121">
                      <a href="#">পরীক্ষার ফলাফল</a>
                    </li>
                    <li
                      id="menu-item-122"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-122">
                      <a href="#">অনলাইন ভর্তি আবেদন</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-widget aos-init" data-aos="slide-up">
                <h2>ফুটার ২</h2>
                <div className="menu-footer-2-container">
                  <ul id="menu-footer-2" className="menu">
                    <li
                      id="menu-item-123"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-123">
                      <a href="#">প্রতিষ্ঠানের ইতিহাস</a>
                    </li>
                    <li
                      id="menu-item-124"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-124">
                      <a href="#">একাডেমিক ক্যালেন্ডার</a>
                    </li>
                    <li
                      id="menu-item-125"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-125">
                      <a href="#">যোগাযোগ</a>
                    </li>
                    <li
                      id="menu-item-126"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-126">
                      <a href="#">ছুটির দিন</a>
                    </li>
                    <li
                      id="menu-item-127"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-127">
                      <a href="#">কৃতি শিক্ষার্থী</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-widget aos-init" data-aos="slide-up">
                <h2>ফুটার ৩</h2>
                <div className="menu-footer-3-container">
                  <ul id="menu-footer-3" className="menu">
                    <li
                      id="menu-item-128"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-128">
                      <a href="#">আমাদের সেবা</a>
                    </li>
                    <li
                      id="menu-item-129"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-129">
                      <a href="#">গোপনীয়তা নীতি</a>
                    </li>
                    <li
                      id="menu-item-130"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-130">
                      <a href="#">শর্তাবলী</a>
                    </li>
                    <li
                      id="menu-item-131"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-131">
                      <a href="#">সাইটম্যাপ</a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* end footer widget */}
            </div>
          </div>
        </div>
      </footer>
      <div className="footcraeid">
        Copyright © E-School Demo All rights reserved |{" "}
        <a href="/" id="developer-link">
          Developed By Mahabub Alom
        </a>
      </div>
    </>
  );
}
