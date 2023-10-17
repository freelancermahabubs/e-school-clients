"use client";
import Link from "next/link";
import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div className="main-wrapper main-mn-n-header-wrapper">
      <header>
        <div className="header-main-wrapepr">
          <div className="wrapper header-wrapper">
            <div className="logo-and-menus">
              {/* start web logo */}
              <div className="web-logo">
                <a
                  href="https://gripetech.com/demo/"
                  className="custom-logo-link"
                  rel="home"
                  aria-current="page">
                  <img
                    width={1200}
                    height={200}
                    src="https://i.ibb.co/BGzbPSp/download-1.jpg"
                    className="custom-logo"
                    alt="E-School"
                  />
                </a>{" "}
              </div>
              {/* end web logo */}
              <div className="main-menu main-menu-top-wrapper-right-now">
                <div className="web-menu-section">
                  <div className="mobile-by-defult-header-wrapper">
                    <div className="time-of-bd-wrapper">
                      <p id="banglaDateasgdjhasgdh">
                        মঙ্গলবার, ১৭ অক্টোবর ২০২৩
                      </p>
                    </div>
                    <div className="mobile-menu-close-and-open-button">
                      <button
                        id="main-menu-open-btn"
                        onClick={toggleMobileMenu}
                        className="hamburger-icon">
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* start main menu */}
        <div className="out-of-wrapper-main-menu-jsgdjhf" id="navbar">
          <div className="wrapper">
            {/* 				start out of wrapper menu */}
            <div className="pc-extra-main-menu">
              <div className="menu-main-menu-container">
                <ul id="menu-main-menu" className="menu">
                  <li
                    id="menu-item-28"
                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-28">
                    <a href="/" aria-current="page">
                      <i className="fa-solid fa-house" /> প্রচ্ছদ
                    </a>
                  </li>
                  <li
                    id="menu-item-44"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44">
                    <a>পরিচিতি</a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-38"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38">
                        <a href="/">এক নজরে পরিচিতি</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-45"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-45">
                    <a>জনবল</a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-43"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43">
                        <a href="/">শিক্ষক ও শিক্ষিকা</a>
                      </li>
                      <li
                        id="menu-item-42"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                        <a href="/">কর্মকর্তা</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-46"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-46">
                    <a>শিক্ষার্থী</a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-35"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35">
                        <a href="/">অধ্যায়নরত শিক্ষার্থীর তালিকা</a>
                      </li>
                      <li
                        id="menu-item-39"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39">
                        <a href="/">ডিজিটাল হাজিরার তথ্য</a>
                      </li>
                      <li
                        id="menu-item-40"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40">
                        <a href="/">আইডি কার্ড ডাউনলোড</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-33"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33">
                    <a href="/">পরীক্ষার ফলাফল</a>
                  </li>
                  <li
                    id="menu-item-31"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31">
                    <a href="/">ক্লাস রুটিন</a>
                  </li>
                  <li
                    id="menu-item-34"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34">
                    <a href="/">ছুটির দিন</a>
                  </li>
                  <li
                    id="menu-item-47"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-47">
                    <a>ভর্তি আবেদন</a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-41"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41">
                        <a href="/">অনলাইন ভর্তি আবেদন</a>
                      </li>
                      <li
                        id="menu-item-48"
                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-48">
                        <a href="https://gripetech.com/demo/wp-content/uploads/2023/09/Sample-School-Admission-Form.webp">
                          ভর্তি পরীক্ষার ফর্ম
                        </a>
                      </li>
                      <li
                        id="menu-item-29"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29">
                        <a href="/">ভর্তি পরীক্ষার প্রবেশপত্র</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    id="menu-item-50"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-50">
                    <a>অন্যান্য…</a>
                    <ul className="sub-menu">
                      <li
                        id="menu-item-32"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32">
                        <a href="/">যোগাযোগ</a>
                      </li>
                      <li
                        id="menu-item-36"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36">
                        <a href="/">মুজিব কর্নার</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>{" "}
              <div className="notice-and-login-btn-snd-wrapper">
                <a href="/" className="notice-new-btn-nm">
                  নোটিশ
                </a>
                <Link href="login" className="login-new-btn-nm">
                  লগইন <i className="fa-solid fa-user" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* 				end out of wrapper menu */}
        {/* start mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu">
            <nav>
              <div className="menu-main-menu-container">
                <ul id="menu-main-menu-1" className="menu">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-28">
                    <a href="/" aria-current="page">
                      <i className="fa-solid fa-house" /> প্রচ্ছদ
                    </a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-44">
                    <a>পরিচিতি</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38">
                        <a href="/">এক নজরে পরিচিতি</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-45">
                    <a>জনবল</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43">
                        <a href="/">শিক্ষক ও শিক্ষিকা</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-42">
                        <a href="/">কর্মকর্তা</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-46">
                    <a>শিক্ষার্থী</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35">
                        <a href="/">অধ্যায়নরত শিক্ষার্থীর তালিকা</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39">
                        <a href="/">ডিজিটাল হাজিরার তথ্য</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40">
                        <a href="/">আইডি কার্ড ডাউনলোড</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33">
                    <a href="/">পরীক্ষার ফলাফল</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31">
                    <a href="/">ক্লাস রুটিন</a>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-34">
                    <a href="/">ছুটির দিন</a>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-47">
                    <a>ভর্তি আবেদন</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-41">
                        <a href="/">অনলাইন ভর্তি আবেদন</a>
                      </li>
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-48">
                        <a href="/">ভর্তি পরীক্ষার ফর্ম</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29">
                        <a href="/">ভর্তি পরীক্ষার প্রবেশপত্র</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-50">
                    <a>অন্যান্য…</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32">
                        <a href="">যোগাযোগ</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-36">
                        <a href="/">মুজিব কর্নার</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>{" "}
            </nav>
          </div>
        )}
        {/* end main menu */}
      </header>
    </div>
  );
}
