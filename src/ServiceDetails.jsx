import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';

const ServiceDetails = () => {
    const [serviceDetails, setserviceDetails] = useState({});

    const { id } = useParams();

    const datas = useLoaderData();

    useEffect(() => {
        const findserviceDetails = datas?.find((data) => data.id === id);

        setserviceDetails(findserviceDetails);
    }, [id, datas]);

    // console.log(id);

    return (

        <div>
            <ServiceDetailsCard serviceDetails={serviceDetails}></ServiceDetailsCard>
        </div>
    );
};

export default ServiceDetails;