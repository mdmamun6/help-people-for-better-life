import React from 'react';
import { Link } from 'react-router-dom';

const Donation = ({ donation }) => {
  const {id,img,title,category} =  donation;

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

  const titleClasses = {
    Health: 'text-blue-500',
    Education: 'text-red-500',
    Clothing: 'text-green-500',
    Food: 'text-orange-500',
  };

  return (
    <div>
      <Link to={`/donation/${id}`} className={`block rounded-md ${categoriesBgColor[category]}`}>
        <img className='w-full' src={img} alt='' />
        <div className={`p-4`}>
          <button className={`text-sm p-2 px-3 rounded font-semibold ${titleClasses[category]} ${categoriesTextBgColor[category]} bg-opacity-40`}>{category}</button>
          <h3 className={`text-xl font-semibold ${titleClasses[category]}`}>{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Donation;
