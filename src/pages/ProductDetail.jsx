import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../config/product.js'
import ErrorApp from '../components/Error.jsx'
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../App.css"
import { Rate } from 'antd';

const ProductDetail = () => {

    let navigate = useNavigate()
    let [amount, setAmount] = useState(0)

    let { id } = useParams()
    let singleValue;
    {
        singleValue = products.find((item) => (
            item.id == id
        ))
    }

    return (
        <>
            {
                singleValue ?
                    <div className="DetailParentBox">
                        <div className="DetailChildBox">
                            <div className="detailImage">
                                <MdCancel className='crossIcon one' onClick={() => navigate("/")} />

                                <img src={singleValue.image} alt="" width={"70%"} height={"90%"} />
                            </div>
                            <div className="detaildesc">
                                <MdCancel className='crossIcon two' onClick={() => navigate("/")} />
                                <h2 className='detaildesHead'>{singleValue.title}</h2>
                                <hr />
                                <p className='detaildesPera'>Category: {singleValue.category}</p>
                                <p className='detaildesPera'>Price: ${singleValue.price}</p>
                                <p className='detaildesPera'>Rate: <Rate allowHalf defaultValue={singleValue.rating.rate} style={{ color: "#016b99" }} /></p>
                                <hr />
                                <p className='description'>{singleValue.description.slice(0, 400)}.</p>
                                <div className="AddCartContainer">
                                    <div className="incre" onClick={() => setAmount(amount += singleValue.price)}>+</div>
                                    <div className="add-to">Add To Cart : ${Math.ceil(amount)}</div>
                                    <div className="dec" onClick={() => setAmount(amount -= singleValue.price)}>-</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <ErrorApp />
            }
        </>
    )
}

export default ProductDetail