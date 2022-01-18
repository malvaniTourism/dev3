import React from "react";
import { Container } from "reactstrap";

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../components/Footers/DefaultFooter.js";
import MainCarousel from "../components/Carousels/MainCarousel.js";

function Partners() {
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
                <MainCarousel />
                <div className="section section-contact-us text-center">
                    <Container>
                        <h2 className="title">Our Parteners</h2>
                        <p className="description">Your project is very important to us.</p>
                        
                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </>
    );
}

export default Partners;
