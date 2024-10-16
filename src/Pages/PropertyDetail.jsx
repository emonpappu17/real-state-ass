// import { IoLocationOutline } from "react-icons/io5";
// import { useLoaderData, useParams } from "react-router-dom";
// import { tabTitle } from "../TitleFunction/titleFunction";
// import { useEffect, useState } from "react";

// const PropertyDetail = () => {
//     const cards = useLoaderData();
//     const { id } = useParams();
//     const idInt = parseInt(id);
//     tabTitle('MYHOME | Details')
//     // console.log(Array.isArray(cards));
//     const [card, setCard] = useState(null);

//     useEffect(() => {
//         if (Array.isArray(cards)) {
//             const gotCard = cards.find(card => card.id === idInt);
//             console.log(gotCard);
//             if (gotCard) {
//                 setCard(gotCard);
//             }
//         }
//     }, [cards, idInt])
//     console.log(card);

//     if (!card) {
//         return <div>Loading...</div>;
//     }


//     // console.log(cards, id, idInt, card);

//     return (
//         <div className="space-y-5 p-3">
//             <img className="h-[260px] md:h-[400px] lg:h-full max-h-[700px] mx-auto w-full  rounded-lg" src={card.image} alt="" />
//             <div className="flex justify-between mb-3">
//                 <h2 className="lg:text-3xl md:text-xl text-base uppercase tracking-tight">{card.estate_title}</h2>
//                 <h2 className="lg:text-3xl md:text-xl text-base tracking-tight text-indigo-500">{card.price}</h2>
//             </div>
//             <div className="flex justify-between">
//                 <div className="text-white inline-block font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
//                     {card.status}
//                 </div>
//                 <h2 className="text-xl font-semibold">{card.segment_name}</h2>
//             </div>
//             <hr />
//             <div>
//                 <p className="flex items-center ">
//                     <IoLocationOutline className="text-2xl" /> {card.location}
//                 </p>
//             </div>
//             <div>
//                 <p>{card.description}</p>
//             </div>
//             <div>
//                 <h2 className="lg:text-3xl md:text-xl text-base uppercase tracking-tight mb-3">Features</h2>
//                 <ul className="flex gap-3 flex-wrap">
//                     {card.facilities?.map((facility, i) => (
//                         <li key={i} className="text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
//                             {facility}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default PropertyDetail;


// ===================================================================================

// import { IoLocationOutline } from "react-icons/io5";
// import { useLoaderData, useParams } from "react-router-dom";
// import { tabTitle } from "../TitleFunction/titleFunction";
// import { useEffect, useState } from "react";

// const PropertyDetail = () => {
//     const cards = useLoaderData();
//     const { id } = useParams();
//     const idInt = parseInt(id);
//     tabTitle('MYHOME | Details');

//     const [card, setCard] = useState(null); // Initialize as null

//     useEffect(() => {
//         if (Array.isArray(cards)) {
//             const gotCard = cards.find(card => card.id === idInt);
//             if (gotCard) {
//                 setCard(gotCard);
//             }
//         }
//     }, [cards, idInt]);

//     if (!card) {
//         return <div>Loading...</div>;
//     }

import { IoLocationOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { tabTitle } from "../TitleFunction/titleFunction";
import { useEffect, useState } from "react";

const PropertyDetail = () => {
    const loaderData = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    tabTitle('MYHOME | Details');

    const [card, setCard] = useState(null); // State to hold the current card data
    const [isLoading, setIsLoading] = useState(true); // State to handle loading status

    useEffect(() => {
        if (loaderData && Array.isArray(loaderData)) {
            const gotCard = loaderData.find(card => card.id === idInt);
            // console.log(idInt)
            if (gotCard) {
                setCard(gotCard);
                setIsLoading(false);
            }
        } else {
            // If loaderData is not available, fetch data manually
            fetch('/data.json')
                .then(response => response.json())
                .then(data => {
                    const gotCard = data.find(card => card.id === idInt);
                    // console.log(idInt)
                    setCard(gotCard);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    // console.log(idInt)
                    setIsLoading(false);
                });
        }
    }, [loaderData, idInt]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!card) {
        return <div>No property found.</div>;
    }

    return (
        <div className="space-y-5 p-3 ">
            <img className="h-[260px] md:h-[400px] lg:h-full max-h-[700px] mx-auto w-full rounded-lg"
                src={card.image || 'default-image.jpg'} alt={card.estate_title || 'Property'} />
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
                    {card.facilities?.map((facility, i) => (
                        <li key={i} className="text-white font-semibold uppercase px-3 bg-indigo-500 rounded-lg">
                            {facility}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PropertyDetail;
