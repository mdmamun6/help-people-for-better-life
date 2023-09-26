import React, { useEffect, useState } from 'react';
import Donation from '../Donation/Donation';

export default function AllDonation({ categoryFilter }) {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch('donation.json')
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  const filteredDonations = donations.filter(
    (donation) =>
      donation.category.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  const gridColumns = categoryFilter ? 'lg:grid-cols-3' : 'lg:grid-cols-4';
  const mobileGridColumns = 'md:grid-cols-1'; 

  return (
    <div>
      <div className={`mx-auto w-[90%] md:py-20 py-6 md:w-[80%] grid ${gridColumns} ${mobileGridColumns} gap-6`}>
        {categoryFilter
          ? filteredDonations.map((donation) => (
              <Donation key={donation.id} donation={donation} />
            ))
          : donations.map((donation) => (
              <Donation key={donation.id} donation={donation} />
            ))}
      </div>
    </div>
  );
}
