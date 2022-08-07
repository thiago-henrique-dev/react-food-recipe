import React from 'react'

export default function RecipeTile({recipe}) {
  return (
    <div className='RecipeTile'>
       <p>{recipe["recipe"]["label"]}</p>
    </div>
  )
}
