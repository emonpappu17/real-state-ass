import 'animate.css';
import { useEffect, useState, } from 'react';
import Card from './Card';

const Estates = () => {
    // const [isHovered, setIsHovered] = useState(false)
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            {/* <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="card bg-base-100 w-96 shadow-xl group">
                <figure>
                    <img className={`${isHovered ? 'animate__animated animate__pulse' : ''}`}
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title group-hover:text-red-700">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div> */}
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Estates;