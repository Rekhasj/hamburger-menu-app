import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <div className="popup-container">
    <Link to="/">
      <img
        alt="website logo"
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button testid="hamburgerIconButton">
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      }
      position="center center"
    >
      {close => (
        <>
          <button
            testid="closeButton"
            type="button"
            className="trigger-button"
            onClick={close}
          >
            <IoMdClose className="close-icon" position="top-right" />
          </button>
          <ul>
            <li>
              <Link to="/" className="icon-card">
                <AiFillHome className="icon-image" />
                <p className="pop-up-name">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="icon-card">
                <BsInfoCircleFill className="icon-image" />
                <p className="pop-up-name">About</p>
              </Link>
            </li>
          </ul>
        </>
      )}
    </Popup>
  </div>
)

export default Header
