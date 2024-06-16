import React from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavbarLink = ({ title, to }) => (
    <Link
      className="w-full lg:w-auto text-lg lg:text-base text-center my-1 lg:my-0 lg:mx-2 lg:px-1 flex-shrink-0 flex-grow-0 border-b-2 hover:font-medium hover:bg-gray-600/15 duration:300"
      to={to}
    >
      {title}
    </Link>
)

NavbarLink.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

const NavbarToggle = ({ isOpen, callback }) => (
    <button
        className="flex-shrink-0 flex-grow-0 mr-4 p-2 text-gray-200 lg:hidden"
        onClick={callback}
    >
        <div className={`${isOpen ? "hidden" : "block"}`}>Menu</div>
        <div className={`${isOpen ? "block" : "hidden"}`}>Close</div>
    </button>
)
  
NavbarToggle.propTypes = {
    callback: PropTypes.func.isRequired,
}

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          menuOpen: false,
          menuOpenClassName: 'hidden lg:flex',
        }
    }    

    toggle = () => {
        this.setState(
          {
            menuOpen: !this.state.menuOpen,
          },
          () => {
            this.setState({
              menuOpenClassName: this.state.menuOpen ? 'flex flex-grow' : 'hidden lg:flex',
            })
          }
        )
      }

    render() {

        return (
        <div className="self-start lg:self-end">
            <nav
            className="flex flex-wrap lg:flex-row lg:max-w-6xl flex-shrink-0 flex-grow text-white mx-auto mb-1 items-end justify-between"
            role="navigation"
            aria-label="main-navigation"
            >
                <h1 className="w-auto px-8 py-2 text-xl max-w-fit md:text-3xl lg:text-5xl text-white font-medium">Wanderers Nook</h1>
                <div className="flex">
                    <NavbarToggle isOpen={this.state.menuOpen} callback={this.toggle} />
                </div>
                <div className={'flex-shrink-0 lg:py-2 w-full md:w-auto flex-wrap items-center ' + this.state.menuOpenClassName}>
                    <NavbarLink to={'/'} title={'Home'} />
                    <NavbarLink to={'/'} title={'Routes'} />
                    <NavbarLink to={'/'} title={'Adventures'} />
                    <NavbarLink to={'/'} title={'Foreign Escapades'} />
                    <NavbarLink to={'/about'} title={'About Me'} />
                    <NavbarLink to={'/blog'} title={'Blog'} />
                </div>
                
            </nav>
        </div>
        )
    }
}