import loader from '../../assets/loader.gif'
import './Loader.css'
const Loader = () => {
  return (
    <div className='loader-container'>
        <img src={loader} alt="gif" />
    </div>
  )
}

export default Loader