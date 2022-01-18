import React from "react";
import { Card, CardBody } from 'reactstrap';
import { FaTelegramPlane } from 'react-icons/fa'

const DiscountCard = () => {
    return (
        <Card className='discount_card' style={{ background: `url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }}>
            <CardBody className='disc_card_content'>
                <div className='disc_card_info'>
                    <div>
                        <text className='text_all_bold'>Kokan</text>
                    </div>
                    <div>
                        <text>Book your vacation with travel point</text>
                    </div>
                    <div>
                        <text className='text_all_bold'>Holiday booking</text>
                    </div>
                    <div className='disc_card_book'>
                        <button className="btn btn-warning disc_card_book" type="submit">
                            <text className='btn-book disc_card_book'>Book Now </text>
                            <FaTelegramPlane color='#fff' size={15} />
                        </button>
                    </div>
                </div>
                <div className='disc_card_info'>
                    <text className='text_all_bold'>30% off</text>
                </div>
            </CardBody>
        </Card>
    )
}

export default DiscountCard;