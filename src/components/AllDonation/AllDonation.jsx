import React, { useEffect, useState } from 'react';
import Donation from '../Donation/Donation';

export default function AllDonation({ categoryFilter }) {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch('donation.json')
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  // Filter donations based on categoryFilter
  const filteredDonations = donations.filter(
    (donation) =>
      donation.category.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  const gridColumns = categoryFilter ? 'grid-cols-3' : 'grid-cols-4';

  return (
    <div>
      <div className={`mx-auto w-[90%] py-20 md:w-[80%] grid ${gridColumns} gap-6`}>
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
