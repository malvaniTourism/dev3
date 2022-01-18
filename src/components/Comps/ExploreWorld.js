import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExploreCard from "../Cards/ExploreCard";

const ExploreWorld = () => {
    useEffect(() => {
        window.addEventListener('resize', getDimension)
    
        return () => {
        window.removeEventListener('resize', getDimension)
    
        }
      })

      const getDimension = () => {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
      }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className="ajCenter">
                <h3 className="text_all_bold">Explore the World for Yourself</h3>
            </div>
            <div className="" style={{ marginLeft: '2%' }}>
                <Slider {...settings}>
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                    <ExploreCard />
                </Slider>
            </div>
        </div>
    );
}

export default ExploreWorld;