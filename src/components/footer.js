/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p>Website created with <span className="icon -love"><RiHeart2Line/></span> by <Link to="/">Ramón Gómez</Link></p>
    </div>
  </footer>
)

export default Footer