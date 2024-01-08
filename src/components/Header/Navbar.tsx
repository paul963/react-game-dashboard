import reactLogo from '../../assets/react.svg'
import ThemeColorSwitcher from '../ThemeColorSwitcher'

const Navbar = () => {  
  return (
    <div className='my-3 d-flex align-items-center justify-content-between'>
      <img src={reactLogo} className='p-1 rounded-1 shadow' />
      <ThemeColorSwitcher />
    </div>
  )
}

export default Navbar