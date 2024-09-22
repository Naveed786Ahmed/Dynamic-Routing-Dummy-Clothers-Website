import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = (item) => {    

    let navigate = useNavigate()
    return (
        <>
            <div className="card" style={{ width: "18rem", height: "25rem", borderRadius: "5px", overflow: "hidden", margin: "10px 0px" }}>

                <div className="cardImage">
                    <img src={item.item.image} className="card-img-top" alt="..." style={{width: "50%"}}/>

                </div>
                <div className="card-body">
                    <h4 className="card-text" >
                        {item.item.title}
                    </h4>
                    <p className='card-price'>
                        Price: ${item.item.price}
                    </p>
                    <div className="cardBtnContainer">
                        <div className="cardBtn" onClick={() => navigate(`/productdetail/${item.item.id}`)}>
                            Add To Cart
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card