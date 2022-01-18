import React from "react";
import { Card } from 'reactstrap';
import { AiOutlineArrowRight } from 'react-icons/ai'

const ExploreDetailCard = () => {
    return (
        <Card className='explore_detail_card'>
            <div className='explore_detail_img' style={{ background: `url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }} />
            <div className='explore_detail_data'>
                <div>
                    <text className='explore_more_head'>Europe</text>
                </div>
                <div>
                    <text>19 September 2019</text>
                </div>
                <div>
                    <text className='explore_more_data'>Why you sholdn't ride Elephants in Thailand</text>
                </div>
                <div>
                    <text>Kava contains 30 demos as for now, and we’re planning to release more! Except demos, Kava theme has more and more features for.. users, business, companies, developers, bloggers and other categories of users. Even if you are an absolute beginner</text>
                </div>
                <div>
                    <button className="btn btn-warning" type="submit">
                        <text className='btn-book'>Read More </text>
                        <AiOutlineArrowRight color='#fff' size={20} />
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default ExploreDetailCard;