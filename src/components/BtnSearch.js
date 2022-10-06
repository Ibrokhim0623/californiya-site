import React from 'react'
import '../styles/Button.css'

const btn = [
    {
        id: 1,
        children: 'iPhone'
    },
    {
        id: 2,
        children: 'Charger'
    },
    {
        id: 3,
        children: 'Gift'
    },
    {
        id: 4,
        children: 'Google Pixel 3'
    },
    {
        id: 5,
        children: 'Keyboard'
    },
    {
        id: 6,
        children: '13 Pro Max'
    },
    {
        id: 7,
        children: 'iPhone 12'
    },
    {
        id: 8,
        children: 'Laptop'
    },
    {
        id: 9,
        children: 'Mobile'
    }
]

function BtnSearch() {
  return (
    <>
      <div className='all-btn'>
        {
            btn.map((item) => {
                return(
                    <button className='btn' key={item.id}>{item.children}</button>
                )
            })
        }
      </div>
    </>
  )
}

export default BtnSearch
