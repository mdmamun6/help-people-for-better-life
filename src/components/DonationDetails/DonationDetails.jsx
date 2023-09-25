import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonations } from '../../Utility/LocalStorage';

export default function DonationDetails() {


  const donations = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const donation = donations.find(donation => donation.id === idInt);

  const categoriesBtnBgColor = {
    Health: 'bg-blue-600',
    Education: 'bg-red-500',
    Clothing: 'bg-green-500',
    Food: 'bg-orange-800'
  }

  const handleDonation = () => {
    saveDonations(idInt);
    toast("Thanks for Donate to help people!");
  }

  return (
    <div className='mx-auto py-10 w-[90%] md:w-[80%]'>
        <div className='space-y-6'>
           <div className="relative">
            <img src={donation.img} alt="" className="w-full md:h-[600px] rounded-lg" />
           </div>
            <div className="p-10 bg-black absolute md:top-[80%] top-[38%] md:bottom-[-27px] rounded-lg -mb-8 md:left-[10%] md:right-[10%] left-[5%] right-[5%] bg-opacity-40">
              <button onClick={handleDonation} className={`btn text-white border-0 font-medium ${categoriesBtnBgColor[donation.category]}`}>Donate {donation.price}$</button>
            </div>
            <h3 className="text-3xl font-bold ">{donation.title}</h3>
            <p className='text-gray-800 text-base font-normal'>{donation.description}</p>
        </div>
        <ToastContainer />
    </div>
  )
}
