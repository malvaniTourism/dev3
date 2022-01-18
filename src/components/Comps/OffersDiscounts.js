import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OffersCard from "../Cards/OffersCard";

const OffersDiscounts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="alignCenter">
            <div className="ajCenter bgBlue relative col-md-4" style={{ height: '90vh' }}>
                <h3 className="text_all_bold cWhite col-md-6">Special offers & Discounts</h3>
            </div>
            <div className="absolute col-md-9" style={{ left: '24%' }}>
                <Slider {...settings}>
                    <OffersCard />
                    <OffersCard />
                    <OffersCard />
                    <OffersCard />
                </Slider>
            </div>
        </div>
    );
}

export default OffersDiscounts;