import { useState } from 'react';
import './styles.scss'

const Toggle = () => {
  const [toggle, setToggle] = useState('off')

  const handleToggle = () => {
    toggle === 'off' ? setToggle('on') : setToggle('off')
  }

  return (
    <div className={`toggle toggle--${toggle}`}>
      <div className={`toggle__button toggle__button--${toggle}`} onClick={handleToggle}></div>
    </div>
  )
};

export default Toggle;
