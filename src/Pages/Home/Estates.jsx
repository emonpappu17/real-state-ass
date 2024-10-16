
import 'animate.css';
import { useEffect, useState, } from 'react';
import { IoLocationOutline, } from "react-icons/io5";
import { BiArea } from "react-icons/bi";

// -------------------------------------------
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
// --------------------------------------------------

const Estates = () => {
    const [cards, setCards] = useState([]);
    const [isHovered, setIsHovered] = useState(null); // Track hovered card by id

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, []);

    return (
        <div className='mx-3 mb-14'>
            <div>
                <h2 className='text-center text-5xl font-semibold my-14'>Featured Properties</h2>
            </div>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                freeMode={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    425: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    cards.map(card => (
                        <SwiperSlide key={card.id}>
                            <div
                                onMouseEnter={() => setIsHovered(card.id)}
                                onMouseLeave={() => setIsHovered(null)}
                                className="card bg-base-100 shadow-xl h-full flex flex-col"
                            >
                                <figure className="relative">
                                    <img
                                        className={`${isHovered === card.id ? 'animate__animated animate__pulse' : ''} h-[215px] md:h-[250px] w-full object-cover`}
                                        src={card.image}
                                        alt="Property"
                                    />
                                    <div className="absolute top-2 left-2 text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
                                        {card.status}
                                    </div>
                                </figure>
                                <div className="card-body space-y-3 p-4 flex-grow">
                                    <h2 className="card-title">{card.estate_title}</h2>
                                    <p className="flex items-center">
                                        <IoLocationOutline className="text-2xl" /> {card.location}
                                    </p>
                                    <ul className="flex gap-3 flex-wrap">
                                        {
                                            card.facilities?.map((facility, i) => (
                                                <li key={i} className="text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
                                                    {facility}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    <p className="flex items-center">
                                        <BiArea className="text-2xl" />{card.area}
                                    </p>
                                    <hr />
                                    <div className="flex justify-between items-center">
                                        <Link to={`/property/${card.id}`}><button className="btn btn-primary">View Property</button></Link>
                                        <span className="font-semibold">{card.price}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Estates;





