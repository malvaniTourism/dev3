import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HolidayCard from "../Cards/HolidayCard";

const HolidayPlan = () => {
    return (
        <div className="ajCenter row">
            <div className="ajCenter">
                <h3 className="text_all_bold">Perfect Holiday Plan</h3>
            </div>
            <div className="holidayPlan">
                <HolidayCard />
                <HolidayCard />
                <HolidayCard />
                <HolidayCard />
            </div>
        </div>
    );
}

export default HolidayPlan;