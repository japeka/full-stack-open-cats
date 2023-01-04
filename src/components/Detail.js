import React from 'react'

const Detail = ({ breed }) => {
  return (
    <div className="w-full content-center text-2xl">
      <h2 className=""><span className="font-bold">Cat breed</span>: {breed.name}</h2>
      <p className=""><span className="font-bold">Description</span>:{breed.description}</p>
      <p className=""><span className="font-bold">Temperament</span>: {breed.temperament}</p>
      <p className=""><span className="font-bold">Life span</span>: {breed.life_span} years</p>
    </div>

  )
}

export default Detail