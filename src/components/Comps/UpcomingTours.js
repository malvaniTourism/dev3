import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpcomingToursCard from "../Cards/UpcomingToursCard";

const OffersDiscounts = () => {
    const [slides, setSlides] = useState(3)
    useEffect(() => {
        window.addEventListener('resize', getDimension)

        return () => {
            window.removeEventListener('resize', getDimension)

        }
    }, [slides])

    const getDimension = () => {
        console.log('log', window.innerWidth);
        if (window.innerWidth <= 600) {
            console.log('less');
            setSlides(1)
        } else {
            setSlides(3)
        }
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1
    };
    return (
        <div className="alignCenter">
            <div className="relative col-md-4 col-sm-3" style={{ height: '50vh' }}>
                <h3 className="textCenter text_all_bold cDBlue discText">Upcoming Tours</h3>
            </div>
            <div className="absolute col-md-9 col-sm-3 discDiv">
                <div>
                    <h3 className="textCenter text_all_bold cDBlue discTxt">Upcoming Tours</h3>
                </div>
                <div>
                    <Slider {...settings}>
                        <UpcomingToursCard />
                        <UpcomingToursCard />
                        <UpcomingToursCard />
                        <UpcomingToursCard />
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default OffersDiscounts;