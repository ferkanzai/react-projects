import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Button from './Button';
import Input from './Input';
import Card from './Card';

function App() {
  const [cardText, setCardText] = useState('');
  const [cardCount, setCardCound] = useState([]);
  const [checked, setChecked] = useState({ checked: false, key: '' });
  const [checkedCards, setCheckedCards] = useState([]);

  const handleCardText = (event) => {
    setCardText(event.target.value);
  };

  const handleAddBtn = () => {
    setCardCound((prevCardCount) => [
      ...prevCardCount,
      {
        key: uuid(),
      },
    ]);
  };

  const handleRemoveBtn = () => {
    setCardCound((prevCardCount) => prevCardCount.filter((card, index) => index !== 0));
  };

  const handleCheckBox = (id) => {
    setChecked({
      checked: !checked,
      key: id,
    });
    console.log(checked);
  };

  const handleCheckedCards = () => {};

  return (
    <div id='container'>
      <div className='buttons'>
        <Input handleCardText={handleCardText} />
        <Button btnText='+' onClick={handleAddBtn} />
        <Button btnText='-' onClick={handleRemoveBtn} />
      </div>
      <div className='cards'>
        {cardCount.map(({ key }) => (
          <Card
            cardText={cardText}
            key={key}
            id={key}
            handleCheckBox={handleCheckBox}
            checked={checked}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
