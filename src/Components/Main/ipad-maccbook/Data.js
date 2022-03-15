import React from 'react'
import Main from './Main'
const Data = () => {
    return (
        <div>
            <Main
                product_name='iphone 13 pro'
                description='Now in Alpine Green.'
                price='Available starting 3.18'
                learnUrl="Learn More"
                orderUrl="Shop"
                class_name="first-hightlight-wrapper"
                className='black'
            />
            <Main
                newItem='The new'
                product_name='iphone SE'
                description='Love the power.Love the price.'
                price='Available starting 3.18'
                learnUrl='Learn More'
                orderUrl='Pre-order'
                class_name="second-hightlight-wrapper"
                className='black'
            />
            <Main
                product_name='iphone 11 Pro'
                description='Pro cameras. Pro display. Pro performance.'
                price='From $24.95/mo. or $599 with trade‑in.'
                learnUrl='Learn More'
                orderUrl='Order'
                class_name="third-hightlight-wrapper"
                className='white'
            />

        </div>
    )
}

export default Data
