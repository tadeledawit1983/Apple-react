import React from 'react'
import Navlinks from './Navlinks'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <div>
            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto" href="/"><img src="images/icons/logo-sm.png" alt="" /></a>
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href='/'>Mac</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger"><Link to="/iphone">iphone</Link></a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">ipad</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">watch</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">tv</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Music</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Support</a></li>
                                <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/"><img src="images/icons/search-icon-sm.png" /></a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/"><img src="images/icons/cart-sm.png" alt="" /></a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Nav
