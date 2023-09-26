import React from 'react';

export default function ColorBar({ titlesAndColors }) {
  return (
    <div>
      <div className="flex pb-6 items-center text-center justify-center space-x-4">
        {titlesAndColors.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="text-lg font-semibold">{item.title}</div>
            <div
              className="md:w-20 w-4 h-4"
              style={{ backgroundColor: item.color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
