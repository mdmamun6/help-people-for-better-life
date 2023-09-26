import React from 'react'

export default function ColorBar({titlesAndColors}) {
  return (
    <div>
            <div className="flex pb-6 items-center text-center justify-center space-x-2">
                {titlesAndColors.map((item, index) => (
                    <React.Fragment key={index}>
                    <div className="text-lg font-semibold">{item.title}</div>
                    <div
                        className="md:w-20 w-4 h-4 "
                        style={{ backgroundColor: item.color }}
                    ></div>                    
                    </React.Fragment>
                ))}
            </div>
    </div>
  )
}
