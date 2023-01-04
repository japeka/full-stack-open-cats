import React from 'react'
import { Link } from 'react-router-dom'

const CastList = ({ cats }) => {
  return (
    <div>
      <h1 className='font-bold text-center uppercase text-5xl'>Cat breeds</h1>
      <section className='overflow-hidden'>
        <div className='container px-1 py-1 mx-auto lg:pt-1 lg:px-1'>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            {cats.map((cat,i) => ( cat?.image?.url &&
        <div key={i} className='flex flex-wrap w-1/3'>
          <div className='w-full p-10'>
            <Link to={`/catpage/${cat.id}`}>
              <img alt={cat.name} className='block object-cover object-center w-full h-full rounded-lg' src={cat?.image?.url} />
              <h2 className='font-bold text-center uppercase text-3xl'>{cat.name}</h2>
            </Link>
          </div>
        </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default CastList