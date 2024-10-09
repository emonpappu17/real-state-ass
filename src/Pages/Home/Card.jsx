import { IoLocationOutline, } from "react-icons/io5";
import { BiArea } from "react-icons/bi";

import PropTypes from 'prop-types';

const Card = ({ card }) => {
    console.log(card);
    const { id, estate_title, image, price, status, area, location, facilities } = card

    return (
        <div>
            <div className="card bg-base-100  w-96 shadow-xl">
                <figure className="relative border border-red-600">
                    <img
                        src={image}
                        alt="Property" />
                    <div className="absolute top-2 left-2 text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
                        {status}
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="flex items-center"><IoLocationOutline className="text-2xl"></IoLocationOutline> {location}</p>
                    <ul className="flex gap-3 flex-wrap">
                        {
                            facilities.map((facility, i) => <li key={i} className="text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">{facility}</li>)
                        }
                    </ul>
                    <p className="flex items-center"><BiArea className="text-2xl"></BiArea>{area}</p>
                    <div className="flex justify-between items-center border w-full">
                        <button className="btn btn-primary border">Buy Now</button>
                        <p className="border  inline-flex">{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}

export default Card;