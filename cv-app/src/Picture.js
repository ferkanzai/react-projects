import './Picture.css'

export default function Picture() {
  return (
    <img src={process.env.PUBLIC_URL + 'fca.jpg'} alt='Fernando Carmona' id='cv-img'></img>
  )
}