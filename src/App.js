
import './App.css'
import React from 'react'
import { Request } from './request'
import CatPage from './components/CatPage'
import CatList from './components/CatList'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  // eslint-disable-next-line no-undef
  const { data: cats, isLoading, error  } = Request(`https://api.thecatapi.com/v1/breeds?api_key=${process.env.REACT_APP_CAT_API_KEY}`)
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div data-testid="error">{error.toString()}</div>
  }

  return (
    <Router>
      <div className='container mx-auto pt-4 px-2'>
        <Routes>
          <Route path="/catpage/:id" element={<CatPage />}/>
          <Route path="/" element={<CatList cats={cats} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
