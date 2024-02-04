import SunIcon from '../images/icon-sun.svg'
import Moonicon from '../images/icon-moon.svg'
const header = () => {
  return (
    <div className="flex justify-between h-[70px] items-center">
        <h1 className='text-5xl font-semibold text-white tracking-widest'>TODO</h1>
        <div className="w-[40px] h-[40px] relative flex items-center justify-center">
            <img src={SunIcon} alt="moon-iconn" className='absolute w-full h-full' />
            <img src={Moonicon} alt="sun-icon" className='absolte w-full h-full' />
        </div>
    </div>
  )
}

export default header;


// Functionality 
// Icon div can be clicked => Onclick to change sun to moon or vice versa & change theme to light or dark
