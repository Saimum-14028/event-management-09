import React from 'react';
import { Link } from 'react-router-dom';

const MyEventsCard = ({card}) => {
    return (
        <div className="w-11/12 mx-auto">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='h-48'><img src={card.image} alt={card.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>{card.description.slice(0,200)}</p>
                <p className="card-title text-red-500">$Price: {card.price}</p>
                <div className="card-actions justify-end">
                <Link to={`/service/${card.id}`}><button className="btn btn-primary bg-red-500">Details</button></Link>
                </div>
            </div>
        </div>
      </div>
    );
};


export default MyEventsCard;