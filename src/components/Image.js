import React from 'react'

const Image = ({ url }) => {
  return (
    <img alt='cat' className='w-full h-66 w-116' src={url} />
  )
}

export default Image