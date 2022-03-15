// import React from 'react'
import React, { Component } from 'react'
function Ipad_mac(props) {

    const { className, product_name, newItem, price, class_name, description } = props
    return (
        <div>
            <section className={class_name}>
                <div className="container">
                    {newItem && <div className="new-alert">{newItem}</div>}
                    <div className={`title-wraper bold  ${className}`}>{product_name}</div>
                    <div className={`description-wrapper ${className}`}>
                        {description}
                    </div>
                    <div className={`price-wrapper ${className}`}>{price}</div>
                    <div className="links-wrapper">
                        <ul>
                            <li><a href="">{props.learnUrl}</a></li>
                            <li><a href="">{props.orderUrl}</a></li>
                        </ul>
                    </div>
                    <div className="ipod-caption row">
                        <div className="col-sm-12 col-md-6 text-md-right">{props.text1}</div>
                        <div className="col-sm-12 col-md-6 text-md-left">{props.text2}</div>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default Ipad_mac