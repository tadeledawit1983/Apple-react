import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
const IphoneDetail = () => {
    const { iphoneid } = useParams()
    const navigate = useNavigate()
    const [singleData, setSingleData] = useState([])
    useEffect(() => {
        axios.get('/iphones.json').then((response) => {
            const data = response.data.products
            const singleIphone = data.filter(item => item.product_url === iphoneid)
            setSingleData(singleIphone[0])
        })

    }, [])
    const { product_url, product_name, product_img, product_description } = singleData
    return (
        <section key={singleData.product_url} className=" page mt-5">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <div className="title-wraper bold mt-5">Iphones</div>
                        <h4 className="mb-3">The best for the brightest.</h4>
                        <div key={product_url} className="row">
                            <div className={`col-md-6 my-2`}>
                                <div>
                                    <img src={product_img} alt="" />
                                </div>
                            </div>
                            <div className={`col-md-6 my-auto`}>
                                <h1 className="fw-bold">{product_name}</h1>
                                <p>{product_description}</p>
                                <button className="btnb" onClick={() => navigate('/iphone')}>Go Back to Menu</button>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default IphoneDetail

