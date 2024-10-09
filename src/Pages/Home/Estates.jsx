import 'animate.css';
import { useEffect, useState, } from 'react';
// import Card from './Card';
import { IoLocationOutline, } from "react-icons/io5";
import { BiArea } from "react-icons/bi";

// -------------------------------------------
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// --------------------------------------------------

const Estates = () => {
    const [cards, setCards] = useState([])
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                freeMode={true}
                breakpoints={{
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    cards.map(card => (<SwiperSlide key={card.id}>
                        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="card bg-base-100   shadow-xl">
                            <figure className="relative">
                                <img className={`${isHovered && 'animate__animated animate__pulse'} max-h-[250px] w-full`}
                                    src={card.image}
                                    alt="Property" />
                                <div className="absolute top-2 left-2 text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
                                    {card.status}
                                </div>
                            </figure>
                            <div className="card-body space-y-3 p-4">
                                <h2 className="card-title">{card.estate_title}</h2>
                                <p className="flex items-center"><IoLocationOutline className="text-2xl"></IoLocationOutline> {card.location}</p>
                                <ul className="flex gap-3 flex-wrap">
                                    {
                                        card.facilities.map((facility, i) => <li key={i} className="text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">{facility}</li>)
                                    }
                                </ul>
                                <p className="flex items-center"><BiArea className="text-2xl"></BiArea>{card.area}</p>
                                <hr />
                                <div className="flex justify-between items-center">
                                    <button className="btn btn-primary">View Property</button>
                                    <span className="font-semibold">{card.price}</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </div>
    );
};

export default Estates;