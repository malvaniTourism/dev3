import React from "react";
import { Card } from 'reactstrap';

const ExploreCard = () => {
    return (
        <div style={{paddingTop: 40}}>
            <Card className='explore_card' style={{ background: `url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }}>
                <div className='explore_card_img' style={{ background: `black url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }} />
                <div className='card_content'>
                    <div>
                        <text className='explore_card_head'>Greece</text>
                    </div>
                    <div className='explore_card_data'>
                        <text>
                            Greece is a country in southeastern Europe with thousands of islands throughout the Aegean
                        </text>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default ExploreCard;