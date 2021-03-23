import './BasicInfo.css'

export default function BasicInfo() {
  return (
    <div id='basic-info-text'>
      <h2>Fernando Carmona</h2>
      <p>DevOps Engineer at Openbank</p>
      <div className='social-networks'>
        <a href='https://github.com/ferkanzai' target='_blank' rel='noreferrer'>ferkanzai</a>
        <img src={process.env.PUBLIC_URL + 'github.png'} alt='github icon' id='github-icon' className='icon'></img>
      </div>
      <div className='social-networks'>
        <a href='https://www.linkedin.com/in/fernandocarmonaayuela/' target='_blank' rel='noreferrer'>fernandocarmonaayuela</a>
        <img src={process.env.PUBLIC_URL + 'linkedin.png'} alt='linkedin icon' id='linkedin-icon' className='icon'></img>
      </div>
    </div>
  )
}