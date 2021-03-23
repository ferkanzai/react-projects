import { useState } from 'react';

const Card = ({ title, alt, src, price }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div data-testid='card'>
      <h1 data-testid='title'>{title}</h1>
      <img src={src} alt={alt} />
      <p data-testid='price' style={{ display: isHidden ? 'none' : 'block' }}>
        {price}
      </p>
      <button
        data-testid='toggle'
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      ></button>
    </div>
  );
};

export default Card;
