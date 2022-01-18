import React from "react";

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import MainCarousel from "../components/Carousels/MainCarousel.js";

import OffersCard from "../components/Cards/OffersCard.js";
import HolidayCard from "../components/Cards/HolidayCard.js";
import ExploreCard from "../components/Cards/ExploreCard";
import ExploreMoreCard from "../components/Cards/ExploreMoreCard";
import ExploreDetailCard from "../components/Cards/ExploreDetailCard";
import DefaultFooter from "../components/Footers/DefaultFooter";
import DiscountCard from "../components/Cards/DiscountCard";
import UpcomingToursCard from "../components/Cards/UpcomingToursCard";
import AboutUsCard from "../components/Cards/AboutUsCard";

import OffersDiscounts from "../components/Comps/OffersDiscounts.js";
import HolidayPlan from "../components/Comps/HolidayPlan.js";
import ExploreWorld from "../components/Comps/ExploreWorld.js";

function Index() {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <div className='top_container'>
            <IndexNavbar />
            <div className="wrapper">
                <MainCarousel />
                <div className="main">
                    <OffersDiscounts />
                    <HolidayPlan />
                    <ExploreWorld />
                    <ExploreMoreCard />
                    <ExploreDetailCard />
                    <DiscountCard />
                    <UpcomingToursCard />
                    {/* <AboutUsCard /> */}
                </div>

                <DefaultFooter />
            </div>
        </div>
    );
}

export default Index;
