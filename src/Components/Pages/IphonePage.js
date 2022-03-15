import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const IphonePage = () => {
	const [mydata, setData] = useState([])
	useEffect(() => {
		axios.get('./iphones.json').then(response => setData(response.data.products))
	}, [])

	let order = 1;

	const renderData = mydata.map(data => {
		let order1 = 1;
		let order2 = 2;
		if (order != 1) {
			order1 = 2;
			order2 = 1;
			order--
		} else {
			order++
		}
		const { product_url, product_name, description, starting_price, price_range, product_img } = data
		return (
			<div key={product_url} className="row">
				<div className={`col-md-6 my-auto order-${order1}`}>
					<h1 className="fw-bold">{product_name}</h1>
					<h4>{description}</h4>
					<div className="starting-price">
						<h5>{`Starting at ${starting_price}`}</h5>
					</div>
					<h6 >{price_range}</h6>
					<h4 className="fw-light text-decoration-none">
						<Link to={`/iphone/${product_url}`}>Learn More</Link>
					</h4>
				</div >
				<div className={`col-md-6 my-2 order-${order2}`}>
					<img src={product_img} alt="" />
				</div>
			</div >
		)
	})
	return (
		<div>
			<section className="page mt-5">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper bold mt-5">Iphones</div>
							<div className="brief-description">
								The best for the brightest.
								{renderData}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default IphonePage

