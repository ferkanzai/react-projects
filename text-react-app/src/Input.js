export default function Input(props) {
  const { handleCardText } = props;

  return <input type='text' size='100' onChange={handleCardText} />;
}
