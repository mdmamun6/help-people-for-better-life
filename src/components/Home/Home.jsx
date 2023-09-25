import React, { useState } from 'react';
import AllDonation from '../AllDonation/AllDonation';

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleSearchClick = () => {
    console.log('Search button clicked with category filter:', categoryFilter);
  };

  return (
    <div className=''>
      <div
        className="hero  h-[650px]"
        style={{
          backgroundImage: 'url(http://diejohnsons.samcoderswebsolutions.com/wp-content/uploads/2023/09/Rectangle-4281.png)',
        }}
      >
        <div className="hero-overlay bg-opacity-90  bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full space-y-12">
            <h1 className="md:text-5xl text-2xl text-gray-800 font-bold text-center">I Grow By Helping People In Need</h1>
            <div className="form-control">
              <div className="input-group justify-center">
                <input
                  type="text "
                  placeholder="Search here…"
                  className="input text-gray-800 w-96 focus:outline-none input-bordered"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                />
                <button
                  className="bg-red-500 hover:bg-red-500 border-0 text-white btn btn-primary"
                  onClick={handleSearchClick}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllDonation categoryFilter={categoryFilter} />
    </div>
  );
}
