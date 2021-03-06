import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';
import './FlipCard.scss';

const FlipCard = ({ rus, eng }) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => setFlipped(!flipped)} className="flipCardWrapper">
      <a.div
        className="c back" 
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        {rus}
      </a.div>
      <a.div
        className="c front"
        style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}
      >
        {eng}
      </a.div>
    </div>
  )
}

export default FlipCard
