import React from "react";
import { Card } from 'reactstrap';
import { AiOutlineArrowRight } from 'react-icons/ai'

const ExploreMoreCard = () => {
    return (
        <Card className='explore_more_card' style={{ background: `url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }}>
            <div className='explore_more_content'>
                <div>
                    <div><text className='explore_more_head'>Europe</text></div>
                    <div><text>19 September 2019</text></div>
                    <div>
                        <text className='explore_more_data'>Why you sholdn't ride Elephants in Thailand</text>
                    </div>
                </div>
                <div className='explore_more_btn'>
                    <button className="btn btn-warning" type="submit">
                        <text className='btn-book'>Read More </text>
                        <AiOutlineArrowRight color='#fff' size={20} />
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default ExploreMoreCard;