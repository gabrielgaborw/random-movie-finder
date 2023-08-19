import React, { useState } from 'react'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

const Menu = () => {
  const [stars, setStars] = useState<number>(0)
  const [genres, setGenres] = useState<string[]>([""])

  return (
    <div className="flex flex-col items-center justify-center bg-sky-500 w-full h-screen">
      <span>Find Me a Movie</span>
      <ul className="flex flex-row">
        <li className="group relative">
          <AiOutlineStar className="absolute group-hover:scale-0 top-0 w-10 h-10" />
          <AiFillStar className="absolute scale-0 group-hover:scale-100 top-0 w-10 h-10" />
        </li>
      </ul>
    </div>
  )
}

export default Menu