import React from 'react'

const Card = ({imageUrl, title, description}) => {
  return (
    <div className='card bg-gray-900  cursor-pointer border border-slate-600 p-16 rounded-xl my-5'>
        <div className='card-body flex'>
            
            <div className='flex gap-8'>
                <img className="w-20 rounded-2xl object-contain" src={imageUrl} alt="" />
                <div>
                <div className='card-title font-bold'>
                <h1 className='text-2xl'>
                    {title}
                </h1>
                </div>
                <div className='card-text text-gray-200'>
                <p className=''>
                    {description}
                </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card