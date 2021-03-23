export default function Card(props) {
  const { cardText, id, handleCheckBox, checked } = props;

  return (
    <div className='card'>
      <p>{id}</p>
      <p id={id}>{cardText}</p>
      <input
        type='checkbox'
        id={id}
        className='checkbox'
        onChange={() => handleCheckBox(id)}
        defaultChecked={checked.checked}
      ></input>
    </div>
  );
}
