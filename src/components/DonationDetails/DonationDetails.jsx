import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonations } from '../../Utility/LocalStorage';

export default function DonationDetails() {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);

  const categoriesBtnBgColor = {
    Health: 'bg-blue-600',
    Education: 'bg-red-500',
    Clothing: 'bg-green-500',
    Food: 'bg-orange-800',
  };

  const handleDonation = () => {
    saveDonations(idInt);
    toast('Thanks for Donate to help people!');
  };

  return (
    <div className="mx-auto py-10 w-[90%] md:w-[80%]">
      <div className="space-y-6 relative">
        <div className="relative">
          <img src={donation.img} alt="" className="w-full md:h-[600px] h-auto rounded-lg" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 md:p-10  p-6 text-left border-b rounded-b-lg">
            <button onClick={handleDonation} className={`btn text-white border-0 font-medium ${categoriesBtnBgColor[donation.category]}`}>
              Donate {donation.price}$
            </button>
          </div>
        </div>
        <h3 className="md:text-3xl text-2xl font-bold">{donation.title}</h3>
        <p className="text-gray-800 text-base font-normal">{donation.description}</p>
      </div>
      <ToastContainer />
    </div>
  );
}
