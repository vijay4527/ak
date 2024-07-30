"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Sidebar from "../sidebar/sidebar";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <>
      <div className={`container-fluid ${styles.headerContainer}`}>
        <img src="/palmTech.jpg" alt="" className={styles.headerImage} />
        <p className={styles.title} data-vxa-defaulttext="" id="title">
          20% OFF PRINT + DIGITAL
          <br />
        </p>
        <p
          className={styles["sub-title"]}
          data-vxa-defaulttext=""
          id="sub-title"
        >
          <span>1 YEAR FOR INR 7,996</span>
          <br />
        </p>
        <button
          data-type="get"
          className={`${styles["canvas-loading-btn"]} btn-canvas buttonGroup-wid-15948`}
          data-id="actionButton"
          type="button"
          data-wid="15948"
          data-name="Summer24Asia_Topbar_1Y_P+D VAR"
          data-pid="1014"
          data-cid="3541"
          data-apikey="kyzzf@prj"
          data-ext="1"
          data-link="https://www.timeasiasubs.com/storefront/campaigns/subx_tiasummer24/?utm_medium=onsite&amp;utm_source=subx&amp;utm_campaign=consumermarketing-apac-prospects+site-reg-paid+prospects&amp;utm_content=summer24+na+na+na+na+na+na"
          data-target="_self"
          id="buttonGroup"
        >
          <span
            className="label button-get-text button-get-text-wid-15948"
            href=""
            target="_blank"
          >
            ORDER NOW
            <br />
          </span>
          <div className="loader small">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
            <div className="dot dot4"></div>
          </div>
        </button>
      </div>
      <div className="navbar-second time-nav container-fluid">
        <div className="items item1">
          <p className="sign-p">Sign Up For News Letter</p>
        </div>
        <div className="items">
          <svg
            role="img"
            width="90px"
            height="100%"
            preserveAspectRatio="xMinYMin meet"
            viewBox="0 0 98 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>TIME logo</title>
            <path
              fill="#e90606"
              d="M3 2.36h23.67v5.4h-.43l.05-3.46h-9.35v24.36h2.7v.8H10.4v-.8h2.5V4.3H3.45v3.46H3v-5.4zM27.8 2.36h9.3v.75h-2.65v25.56h2.64v.8h-9.3v-.8h2.7V3.1h-2.7v-.74zM45.3 2.3h1.78l8.7 20.9 8.64-20.9h1.73L71 28.66h2.44v.8h-9.6v-.8h2.47l-3-16.85-7.68 17.67h-1.8l-7.6-17.66-3.2 16.86h2.33l-.05.8h-7.07l.05-.8h2.16L45.3 2.3zM74.25 2.36h20.47l.05 5.35h-.37l-.17-3.3-13.4-.15v10.7h11.4l.27-2.5h.5c-.12 2.28-.12 4.5 0 6.76h-.5l-.27-2.58h-11.4V27.7h13.9l.04-3.68h.38v5.45h-20.9v-.76l2.7-.04V3.16l-2.7-.05v-.74z"
            ></path>
          </svg>
        </div>
        <div className="items item3">
          <button className="subscribe-btn">SUBCRIBE</button>
        </div>
      </div>
      <div className="navbar-second border-nav container-fluid">
        <div className="items">
          <button
            id="button-in-unless"
            className="menu-btn"
            title="Menu"
            aria-label="Menu"
          >
            <div className="menu-btn-box">
              <div className="menu-btn-inner"></div>
            </div>
          </button>
        </div>
        <div className="items p-img">
          <img src="https://time.com/img/newsletter-round.svg" alt="" />
          <p>SIGN UP FOR OUR PARIS OYLMPICS NEWSLETTER</p>
        </div>
        <div className="items"></div>
      </div>
      <section className="time-blog-section">
        <div className="container">
          <div className="item1">
            <div className="wrap1">
              <div className="wrap1-item1">
                <div className="text-wrap">
                  <h3 className="title">Kamala Harris' Balancing Act</h3>
                  <p className="min-read">5 MIN READ</p>
                  <p className="date-time-p">JULY 2, 2024 • 4:38 PM EDT</p>
                  <p className="desc">
                    "Let’s deal with what we’ve got," Harris said at a recent
                    fundraiser.
                  </p>
                </div>
              </div>
              <div className="wrap1-item2">
                <img
                  src="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2157048119.jpg?quality=85&w=616&h=411&crop=1&resize=616,411"
                  alt=""
                />
              </div>
            </div>
            <div className="wrap2 pt-5">
              <div className="wrap2-item1 item">
                <article class="slide">
                  <div class="image-container">
                    <a href="/6994628/democrats-biden-drop-out/">
                      <div class="partial aspect-ratio-box">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcset="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=600&amp;h=600&amp;crop=1&amp;resize=600,600"
                          />
                          <source
                            media="(min-width: 768px)"
                            srcset="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=616&amp;h=411&amp;crop=1&amp;resize=616,411, https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=925&amp;h=617&amp;crop=1&amp;resize=925,617 1.5x, https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=1024&amp;h=683&amp;crop=1&amp;resize=1024,683 2x"
                          />
                          <img
                            src="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=925&amp;h=617&amp;crop=1&amp;resize=925,617"
                            alt="The Democrats Urging Biden to Step Aside"
                          />
                        </picture>
                      </div>{" "}
                    </a>
                  </div>
                  <div className="dek">
                    <a className="a-padding" href="/6994628/democrats-biden-drop-out/">
                      <h3 class="title no-eyebrow">
                        The Democrats Urging Biden to Step Aside
                      </h3>
                    </a>
                    <div class="time-to-read">3 MIN READ</div>
                    <time class="timestamp published-date display-inline">
                      Updated: July 2, 2024 • 6:40 PM EDT
                    </time>
                  </div>
                </article>
              </div>
              <div className="wrap2-item1 item">
                <article class="slide">
                  <div class="image-container">
                    <a className="a-padding" href="/6994628/democrats-biden-drop-out/">
                      <div class="partial aspect-ratio-box">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcset="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=600&amp;h=600&amp;crop=1&amp;resize=600,600"
                          />
                          <source
                            media="(min-width: 768px)"
                            srcset="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=616&amp;h=411&amp;crop=1&amp;resize=616,411, https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=925&amp;h=617&amp;crop=1&amp;resize=925,617 1.5x, https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=1024&amp;h=683&amp;crop=1&amp;resize=1024,683 2x"
                          />
                          <img
                            src="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=925&amp;h=617&amp;crop=1&amp;resize=925,617"
                            alt="The Democrats Urging Biden to Step Aside"
                          />
                        </picture>
                      </div>{" "}
                    </a>
                  </div>
                  <div class="dek">
                    <a className="a-padding" href="/6994628/democrats-biden-drop-out/">
                      <h3 class="title no-eyebrow">
                        The Democrats Urging Biden to Step Aside
                      </h3>
                    </a>
                    <div class="time-to-read">3 MIN READ</div>
                    <time class="timestamp published-date display-inline">
                      Updated: July 2, 2024 • 6:40 PM EDT
                    </time>
                  </div>
                </article>
              </div>
              <div className="wrap2-item1 item">
                <article class="slide">
                  <div class="image-container">
                    <a href="/6994628/democrats-biden-drop-out/">
                      <div class="partial aspect-ratio-box">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcset="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=600&amp;h=600&amp;crop=1&amp;resize=600,600"
                          />
                          <source
                            media="(min-width: 768px)"
                            srcset="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=616&amp;h=411&amp;crop=1&amp;resize=616,411, https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=925&amp;h=617&amp;crop=1&amp;resize=925,617 1.5x, https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=1024&amp;h=683&amp;crop=1&amp;resize=1024,683 2x"
                          />
                          <img
                            src="https://api.time.com/wp-content/uploads/2024/07/GettyImages-2159654164.jpg?quality=85&amp;w=925&amp;h=617&amp;crop=1&amp;resize=925,617"
                            alt="The Democrats Urging Biden to Step Aside"
                          />
                        </picture>
                      </div>{" "}
                    </a>
                  </div>
                  <div class="dek">
                    <a href="/6994628/democrats-biden-drop-out/">
                      <h3 class="title no-eyebrow">
                        The Democrats Urging Biden to Step Aside
                      </h3>
                    </a>
                    <div class="time-to-read">3 MIN READ</div>
                    <time class="timestamp published-date display-inline">
                      Updated: July 2, 2024 • 6:40 PM EDT
                    </time>
                  </div>
                </article>
              </div>
              
            </div>
          </div>
          <div className="item2">
           <Sidebar /> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
