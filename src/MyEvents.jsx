import React, { useEffect, useState } from 'react';
import MyEventsCard from './MyEventsCard';

const MyEvents = () => {
    const [service, setService] = useState([]);
    const [noFound, setNofound] = useState();
    const [isShow,setIsShow] = useState(false)

    useEffect(() => {
      const favoriteItems = JSON.parse(localStorage.getItem("service"));

      if (favoriteItems) {
        setService(favoriteItems);
      } else {
        setNofound("No Service Found!");
      }
    }, []);

    return (
        <div>
            {noFound ? (
                <p className="h-full flex justify-center items-center text-5xl font-bold text-red-700">{noFound}</p>
            ) : (
                <div>
                    <div className="md:grid grid-cols-2 gap-5 mb-5">
                        {
                            isShow ? service.map((card) => (
                                <MyEventsCard key={card.id} card={card}></MyEventsCard>
                            )) 

                            : service.slice(0,2).map((card) => (
                                <MyEventsCard key={card.id} card={card}></MyEventsCard>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center">
                        {service.length > 2 && !isShow && <button onClick={()=>setIsShow(!isShow)}  className="btn btn-accent text-white bg-red-500">
                            See All
                    </button>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyEvents;