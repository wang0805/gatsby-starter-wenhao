import React from 'react'

import Footer from './Footer'
import wenhao from '../assets/images/wenhao.png'
import selfie from '../assets/images/self.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={wenhao} alt="" />
          </a>
          <h1>
            <strong>Wang Wenhao </strong>
            <br />
            {/* <strong>Welcome to my Website</strong> */}
            <br />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
