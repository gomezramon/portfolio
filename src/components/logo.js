import React from "react"
import { Link } from "gatsby"

// TODO => add title to <div>
// <Link to="/">{props.title}</Link>

const Logo = props => (
  <div className="site-logo">
    <Link to="/">Stranger blog</Link>
  </div>
)

export default Logo
