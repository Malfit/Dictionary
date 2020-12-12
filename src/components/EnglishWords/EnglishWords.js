import React from 'react'
import FlipCard from '../FlipCard';
import { defaultWords } from './defaultWords';
import './EnglishWords.scss';

const EnglishWords = () => {

  return (
    <div className="cardsWrapper">
      {defaultWords.map(item => {
        return (
          <div key={item._id} className="flipCardWrapper">
            <FlipCard
              rus={item.rus}
              eng={item.eng}
            />
            {/* {item.eng} */}
          </div>
        )
      })
    }
    </div>
  )
}

export default EnglishWords
