import './styles.scss'

import Toggle from '../Toggle'
import Spinner from '../Spinner'

const Main = () => {
  return (
    <main className='main'>
      <div className="main__card"><Toggle /></div>
      <div className="main__card"><Spinner /></div>
      <div className="main__card"></div>
      <div className="main__card"></div>
      <div className="main__card"></div>
      <div className="main__card"></div>
    </main>
  )
}

export default Main;