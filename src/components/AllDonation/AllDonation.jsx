import React, { useEffect, useState } from 'react'
import Donation from '../Donation/Donation';

export default function AllDonation() {
    
    const [donations, setDonations] = useState([]);

    useEffect(() =>{
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[])
  return (
    <div>
      
      <div className='mx-auto w-[90%] py-20 md:w-[80%] grid md:grid-cols-4 gap-6'>
        {
            donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
        }
      </div>
    </div>
  )
}
