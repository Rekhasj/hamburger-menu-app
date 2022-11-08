import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <img
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-image"
      />
    </div>
  </>
)

export default Home
