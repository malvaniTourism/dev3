import React from "react";
import { Container } from "reactstrap";

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";
import AboutUsCard from "../components/Cards/AboutUsCard";

const data = [
  {
    id: 1,
    name: "Pranav Kamble",
    photo: "https://businessbook.co.in/assets/images/pranav-copy.jpg",
    profile: "Co-Founder & Developer",
    social: {
      fb: "https://www.facebook.com/pranav.kamble.311",
      tweet: "https://www.facebook.com/pranav.kamble.311",
      link: "https://www.facebook.com/pranav.kamble.311",
      insta: "https://www.facebook.com/pranav.kamble.311"
    }
  },
  {
    id: 2,
    name: "Balkrushna Walke",
    photo: "https://businessbook.co.in/assets/images/img-20200117.jpeg",
    profile: "Co-Founder & Developer",
    social: {
      fb: "https://www.facebook.com/balkrushna.walke/",
      tweet: "https://www.facebook.com/balkrushna.walke/",
      link: "https://www.facebook.com/balkrushna.walke/",
      insta: "https://www.facebook.com/balkrushna.walke/"
    }
  }
]

function About() {
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div
          className="page-header clear-filter page-header-small"
          filter-color="blue"
        >
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/bg5.jpg").default + ")",
            }}
          ></div>
        </div>
        <div className="section">
          <Container>
            <h3 className="title">About us</h3>

            <div className='aboutus_div'>
              {data.map((user) => {
                return (
                  <AboutUsCard data={user} />
                )
              })}
            </div>

          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default About;
