import React from "react";
import { Card, CardBody } from 'reactstrap';
import { FaTelegramPlane } from 'react-icons/fa'

const HolidayCard = () => {
    return (
        <Card className='holiday_card'>
            <div className='holiday_card_img' style={{ background: `black url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }} />
            <CardBody className='holiday_card_content'>
                <div>
                    <FaTelegramPlane color='#01B9B7'/>
                    <text style={{color: '#01B9B7'}}> Maldives</text>
                </div>
                <div>
                    <text className='holiday_card_title'>Bali Province</text>
                </div>
                <div>
                    <text>7 days tour on 2 person</text>
                </div>
                <div>
                    <text className='holiday_card_price'>620/-</text>
                </div>
            </CardBody>
        </Card>
    )
}

export default HolidayCard;