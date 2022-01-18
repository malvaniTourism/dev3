import React, { useState } from "react";
import { Card, CardBody } from 'reactstrap';

const AboutUsCard = (props) => {
    const [user, setUsers] = useState(props.data);

    console.log('userr');

    return (
        <Card className='aboutus_card'>
            <div className='aboutus_card_img' style={{ background: `url(${user.photo})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
            <CardBody className='aboutus_card_content'>
                <div>
                    <text className='aboutus_card_title'>{user.name}</text>
                </div>
                <div>
                    <text style={{ color: '#01B9B7' }}>{user.profile}</text>
                </div>
                <div className="about_social_icons">
                    <ul className="social-icons">
                        <li><a className="facebook" href={user.social.fb} target="_blank"><i className="fab fa-facebook"></i></a></li>
                        <li><a className="twitter" href={user.social.tweet} target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="linkedin" href={user.social.link} target="_blank"><i className="fab fa-linkedin"></i></a></li>
                        <li><a className="instagram" href={user.social.insta} target="_blank"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    )
}

export default AboutUsCard;