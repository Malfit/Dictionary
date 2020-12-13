import React from 'react'
import FlipCard from '../FlipCard';
import { defaultWords } from './defaultWords';
import './EnglishWords.scss';

const EnglishWords = () => {

  return (
    <div className="cardsWrapper">
      {defaultWords.map(item => {
        return (
          <FlipCard
            key={item._id}
            rus={item.rus}
            eng={item.eng}
          />
        )
      })
    }
    </div>
  )
}

export default EnglishWords
