import React from "react";
import { Card } from 'reactstrap';
import { MdLocationOn } from 'react-icons/md'

const UpcomingToursCard = () => {
    return (
        <div style={{ paddingTop: 20 }}>
            <Card className='upcoming_tours_card' style={{ background: `url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }}>
                <div className='upcoming_tours_content'>
                    <div className='upcoming_tours_price_div'>
                        <div className='upcoming_tours_price'>
                            <div>
                                <text className='price'>635/-</text>
                            </div>
                            <div>
                                <text>Price</text>
                            </div>
                        </div>
                    </div>
                    <div className='upcoming_tours_data'>
                        <div>
                            <text className='text_all_bold'>Rome</text>
                        </div>
                        <div>
                            <MdLocationOn />
                            <text>  Itali</text>
                        </div>
                        <div>
                            <text style={{ color: '#ffc107' }}>5.0</text>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default UpcomingToursCard;