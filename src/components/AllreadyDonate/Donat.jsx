import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getStoreDonations } from '../../Utility/LocalStorage';

export default function () {
  const donations = useLoaderData();

  const [donate, setDonate] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  const categoriesBgColor = {
    Health: 'bg-blue-15',
    Education: 'bg-red-20',
    Clothing: 'bg-green-100',
    Food: 'bg-orange-20',
  }

  const categoriesTextBgColor = {
    Health: 'bg-blue-300',
    Education: 'bg-red-300',
    Clothing: 'bg-green-300',
    Food: 'bg-orange-300',
  }

  const categoriesBtnBgColor = {
    Health: 'bg-blue-600',
    Education: 'bg-red-500',
    Clothing: 'bg-green-500',
    Food: 'bg-orange-800'
  }

  const titleClasses = {
    Health: 'text-blue-500',
    Education: 'text-red-500',
    Clothing: 'text-green-500',
    Food: 'text-orange-500',
  };

  useEffect(() => {
    const storedDonationId = getStoreDonations();
    if(donations.length > 0){
      const alreadyDonate = [];
      for(const id of storedDonationId){
        const donation = donations.find(donation => donation.id === id);
        if(donation){
          alreadyDonate.push(donation);
        }
      }
      setDonate(alreadyDonate);
    }
  },[])
  return (
    <div>
        <div className='mx-auto md:py-20 py-6 w-[90%] md:w-[80%]'>
            <ul className='grid grid-cols-2 gap-6'>
                {
                  donate.slice(0,dataLength).map(donation => <li  key={donation.id}>
                    <span>
                    <div className={`grid grid-cols-3 mb-6 gap-6 rounded-md ${categoriesBgColor[donation.category]}`}>
                        <div className="col-span-1">
                          <img src={donation.img} alt="" className="md:h-[212px] h-auto w-full rounded-md" />
                        </div>
                        <div className="col-span-2 space-y-2 py-6">
                          <button className={`text-sm p-2  px-3 rounded font-semibold ${titleClasses[donation.category]} ${categoriesTextBgColor[donation.category]} bg-opacity-40`}>{donation.category}</button>
                          <h3 className={`text-2xl font-semibold text-gray-800`}>{donation.title}</h3>
                          <p className={`font-medium ${titleClasses[donation.category]}`}>${donation.price}</p>    
                          <button className={` text-sm p-2 btn px-3 rounded font-semibold ${categoriesBtnBgColor[donation.category]}   text-white `}>Show Details</button>                       
                        </div>
                      </div>
                    </span>
                  </li>)
                }
            </ul>
            <div className="text-center">
              <div className={dataLength === donate.length && 'hidden'}>
                <button onClick={() => setDataLength(donate.length)} className='btn mt-10 text-center  bg-indigo-800 hover:bg-indigo-600 text-white'>Show More</button>
              </div>
            </div>
        </div>
    </div>
  )
}
