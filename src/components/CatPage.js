import React from 'react'
import { Request } from '../request'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Image from './Image'
import Detail from './Detail'

const CatPage = () => {
  const { id } = useParams()
  const { data: cat, isLoading, error  } = Request(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=${process.env.REACT_APP_CAT_API_KEY}`)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div data-testid='error'>{error.toString()}</div>
  }

  return (
    cat.length && cat[0].url && <div className='container mx-auto pt-4 px-2'>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-2xl'>
        <Link to='/'>Home</Link>
      </button>
      <div className='columns-2 mt-4'>
        <Image url={cat[0].url} />
        <Detail breed={cat[0].breeds[0]} />
      </div>
    </div>
  )
}

export default CatPage