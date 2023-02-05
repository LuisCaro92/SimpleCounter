import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'


const  Contador =(props) => {
const element =<FontAwesomeIcon icon={ faHourglassHalf} />


  return (
    <div className='container p-4'>
    <div className='row bg-black text-light text-center' style={{ "fontSize": "90px" }}>
      <div className='col border border-white' ><p>{element}</p></div>
      <div className='col border border-white'>{props.numberOne % 10}</div>
      <div className='col border border-white'>{props.numberTwo % 10}</div>
      <div className='col border border-white'>{props.numberThree % 10}</div>
      <div className='col border border-white'>{props.numberFour % 10}</div>

    </div>
  </div>
  )
}


export default Contador;
