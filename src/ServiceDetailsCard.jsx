import React from 'react';
import swal from 'sweetalert';

const ServiceDetailsCard = ({serviceDetails}) => {

        const handleService = () => {

        const serviceList = [];
        const serviceItems = JSON.parse(localStorage.getItem("service"));

        if (!serviceItems) {
          serviceList.push(serviceDetails);
          localStorage.setItem("service", JSON.stringify(serviceList));
          swal("Good job!", "Products added successfully!", "success");
        } 
        else {
          const isExits = serviceItems.find((item) => item.id === serviceDetails.id);

          if (!isExits) {

            serviceList.push(...serviceItems, serviceDetails);
            localStorage.setItem("service", JSON.stringify(serviceList));
            swal("Done!", "Service Added Successfully!", "success");

          }
          else {
            swal("Error!", "Already added!", "error");
          }
        }
  }

  return (
      <div className="w-11/12 mx-auto">
          <div className="hero min-h-screen" style={{backgroundImage: `url(${serviceDetails.image})`}}>
          </div>
          <h1 className="text-4xl font-bold my-5">{serviceDetails.title}</h1>
          <p className="card-title text-red-500 my-5">$Price: {serviceDetails.price}</p>
          <p className="text-base font-normal text-justify mb-10">{serviceDetails.description}</p>
          <div className="card-actions justify-end">
            <button onClick={handleService} className="btn btn-wide bg-red-500 mb-5">Add Now</button>
          </div>
      </div>
  );
};

export default ServiceDetailsCard;