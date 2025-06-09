import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bgcImage } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
                <img
                  src={bgcImage}
                  alt=""
                />
              </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch