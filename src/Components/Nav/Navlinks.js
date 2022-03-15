import React from 'react'

const Navlinks = (props) => {
    return (

        <li className="nav-item"><a className="nav-link js-scroll-trigger" href={props.url}>{props.name}</a></li>


    )
}

export default Navlinks                        