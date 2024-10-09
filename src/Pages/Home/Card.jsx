import { IoLocationOutline, } from "react-icons/io5";
import { BiArea } from "react-icons/bi";

import PropTypes from 'prop-types';
import { useState } from "react";
// -------------------------------------------
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
 import 'swiper/css/bundle';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// ----------------------------------------------

const Card = ({ card }) => {
    // console.log(card);
    const [isHovered, setIsHovered] = useState(false)
    const { id, estate_title, image, price, status, area, location, facilities } = card

    return (
        <SwiperSlide><div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="card bg-base-100  w-96 shadow-xl">
            <figure className="relative">
                <img className={`${isHovered ? 'animate__animated animate__pulse' : ''}`}
                    src={image}
                    alt="Property" />
                <div className="absolute top-2 left-2 text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
                    {status}
                </div>
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title">{estate_title}</h2>
                <p className="flex items-center"><IoLocationOutline className="text-2xl"></IoLocationOutline> {location}</p>
                <ul className="flex gap-3 flex-wrap">
                    {
                        facilities.map((facility, i) => <li key={i} className="text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">{facility}</li>)
                    }
                </ul>
                <p className="flex items-center"><BiArea className="text-2xl"></BiArea>{area}</p>
                <hr />
                <div className="flex justify-between items-center">
                    <button className="btn btn-primary">View Property</button>
                    <span className="font-semibold">{price}</span>
                </div>
            </div>
        </div></SwiperSlide>
    );
};

Card.propTypes = {
    card: PropTypes.object
}

export default Card;