import React from "react";
import Swiper from "./swiper";
import Swiper2 from "./swiper1";
const Main = () => {
  return (
    <div className="Main">
      <div className="container">
        <div className="all-main">
          <div className="main-left">
            <ul>
              <p>Categories</p>
              <li>
                <a href="#">Sports</a>
              </li>
              <li>
                <a href="#">Finance</a>
              </li>
              <li>
                <a href="#">Data</a>
              </li>
              <li>
                <a href="#">Entertainment</a>
              </li>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">Science</a>
              </li>
              <li>
                <a href="#">Food</a>
              </li>
              <li>
                <a href="#">Transportation</a>
              </li>
              <li>
                <a href="#">Music</a>
              </li>
              <li>
                <a href="#">Business</a>
              </li>
              <li>
                <a href="#">Visual Recognition</a>
              </li>
              <li>
                <a href="#">Tools</a>
              </li>
              <li>
                <a href="#">Text analysis</a>
              </li>
              <li>
                <a href="#">Weather</a>
              </li>
              <li>
                <a href="#">Gaming</a>
              </li>
              <li>
                <a href="#">SMS</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Health and Fintess</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
            </ul>
          </div>
          <div className="main-right">
            <h1>Discover More Apps</h1>
            <p>
              Browse through our collections to learn about new use cases to
              implement in your app{" "}
            </p>
            <Swiper />
            <h1>Recommended APIs</h1>
            <p>
              APIs curated by RapidAPI and recommended based on functionality
              offered, performance, and support!
            </p>
            <Swiper2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
