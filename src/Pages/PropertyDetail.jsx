import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { tabTitle } from "../TitleFunction/titleFunction";

const PropertyDetail = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    tabTitle('MYHOME | Details')
    const card = cards.find(card => card.id === idInt);

    // console.log(cards, id, idInt, card);

    return (
        <div className="space-y-5 p-3">
            <img className="h-[260px] md:h-[400px] lg:h-full max-h-[700px] mx-auto w-full  rounded-lg" src={card.image} alt="" />
            <div className="flex justify-between mb-3">
                <h2 className="lg:text-3xl md:text-xl text-base uppercase tracking-tight">{card.estate_title}</h2>
                <h2 className="lg:text-3xl md:text-xl text-base tracking-tight text-indigo-500">{card.price}</h2>
            </div>
            <div className="flex justify-between">
                <div className="text-white inline-block font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
                    {card.status}
                </div>
                <h2 className="text-xl font-semibold">{card.segment_name}</h2>
            </div>
            <hr />
            <div>
                <p className="flex items-center ">
                    <IoLocationOutline className="text-2xl" /> {card.location}
                </p>
            </div>
            <div>
                <p>{card.description}</p>
            </div>
            <div>
                <h2 className="lg:text-3xl md:text-xl text-base uppercase tracking-tight mb-3">Features</h2>
                <ul className="flex gap-3 flex-wrap">
                    {
                        card.facilities.map((facility, i) => (
                            <li key={i} className="text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
                                {facility}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default PropertyDetail;


