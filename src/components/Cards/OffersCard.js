import React from "react";
import { Card, CardBody } from 'reactstrap';
import { FaTelegramPlane } from 'react-icons/fa'

const OffersCard = () => {
    return (
        <div>
            <Card className='my_card'>
                <div className='offer_card_img' style={{ background: `black url(https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg)` }}>
                    <div className='offer_card_book'>
                        <button className="btn btn-warning" type="submit">
                            <text className='btn-book'>Book Now </text>
                            <FaTelegramPlane color='#fff' size={20} />
                        </button>
                    </div>
                </div>
                <CardBody className='card_content'>
                    <div className='card_detail'>
                        <h4>Greece</h4>
                        <p className='detail_sub'>Atmosphere of the sunny country</p>
                    </div>
                    <div className='pack_info'>
                        <div><FaTelegramPlane /><text>8 Oct</text></div>
                        <div><FaTelegramPlane /><text>4 days</text></div>
                        <div><FaTelegramPlane /><text>4.3</text></div>
                    </div>
                    <div className='pack_price'>
                        <div><text>Price</text></div>
                        <div><text>620/-</text></div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default OffersCard;