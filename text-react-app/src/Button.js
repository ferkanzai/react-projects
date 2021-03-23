export default function Button(props) {
  const { btnText, onClick } = props;

  return <button onClick={onClick}>{btnText}</button>;
}
