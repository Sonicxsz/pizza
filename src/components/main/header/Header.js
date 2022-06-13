import './header.scss'
import logo from '../../../assets/img/logo.svg'

function Header() {
  return (
    <div className='header_wrapper'>
        <div className='header_logo'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <h1>REACT PIZZA</h1>
                <h2>самая вкусная пицца</h2>
            </div>
        </div>

        <div className='trash_wrap'>
            <div>520r</div>
            <div>3</div>
        </div>

    </div>
  )
}

export default Header