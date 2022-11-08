import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        className="not-found-image"
      />
      <h1 className="not-found-header">Lost Your Way?</h1>
      <p className="not-found-details">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default NotFound
