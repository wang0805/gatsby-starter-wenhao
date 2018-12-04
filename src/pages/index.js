import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import { Link } from 'gatsby'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.gif'
import full02 from '../assets/images/fulls/02.gif'
import full03 from '../assets/images/fulls/03.gif'
import full04 from '../assets/images/fulls/04.gif'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Tetris',
    description: 'Mini game featuring tetris and time keeping of score',
    stack: 'Stack: Javscript, HTMl, CSS, Bootstrap',
    github: 'https://github.com/wang0805/tetrisproject',
    game: 'https://wang0805.github.io/tetrisproject/',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Fxchange',
    description: 'Matching engine mimicking a real electronic trading platform',
    stack: 'Stack: NodeJS, Express, PSQL, CSS / Bootstrap',
    github: 'https://github.com/wang0805/fxchange',
    game: 'https://enigmatic-basin-19796.herokuapp.com/',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Restaurant reservation app',
    description:
      'Restaurant reservation app with pre-ordering features ( group )',
    stack: 'Stack: Ruby on Rails',
    github: 'https://github.com/wang0805/project3',
    game: 'https://project3-acw.herokuapp.com/',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Social Fxchange',
    description: 'P to P exchange of foreign currency ( USDSGD )',
    stack: 'Stack: Express, ReactJS, NodeJS',
    github: 'https://github.com/wang0805/project4',
    game: 'https://sheltered-badlands-12857.herokuapp.com/',
  },
  // {
  //   id: '5',
  //   src: full05,
  //   thumbnail: thumb05,
  //   caption: 'Photo 5',
  //   description: 'Insert new project',
  //   stack: '',
  //   gIthub: '#',
  //   game: '#',
  // },
  // {
  //   id: '6',
  //   src: full06,
  //   thumbnail: thumb06,
  //   caption: 'Photo 6',
  //   description: 'Insert new project',
  //   stack: '',
  //   github: '#',
  //   game: '#',
  // },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Wang Wenhao'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Bio
                <br />
              </h2>
            </header>
            <p>
              Interest in becoming a full stack developer. Everything we do
              revolves around technology in these modern times hence it has
              always been in my interest to work towards the tech sector. Click
              below to follow through my journey to be an aspiring developer.
            </p>
            <ul className="actions">
              <li>
                <Link className="button" to="/timeline/">
                  My Learning timeline
                </Link>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({
                  id,
                  src,
                  thumbnail,
                  caption,
                  description,
                  stack,
                  github,
                  game,
                }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                  stack,
                  github,
                  game,
                })
              )}
            />

            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul> */}
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              If you have enquiries for me, please contact me at the following
              contact information
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />

                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>

                  <ul className="actions">
                    <li>
                      <br />
                      <input type="submit" value="Send Message" />
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    +65 97531969
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:wh_wang@live.com">wh_wang@live.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
