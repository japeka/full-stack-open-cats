import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'
import CatList from '../src/components/CatList'

const cats = [
  {
    id: "abys",
    name: 'Abyssinian',
    image: {
        url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
    }
  },
  {
    id: "aege",
    name: 'Aegean',
    image: {
       url: 'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg'
    }
  }
]

describe('<CatList />', () => {
  it('renders cat breeds correctly', () => {
    render( 
      <BrowserRouter>
        <CatList cats={cats} />
      </BrowserRouter>
    )
    expect(screen.getByText('Abyssinian')).toBeVisible()
    expect(screen.getByText('Aegean')).toBeVisible()
  })
})

