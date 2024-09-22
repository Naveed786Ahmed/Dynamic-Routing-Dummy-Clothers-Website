import React from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import Card from '../components/Card'
import products from "../config/product.js"
import Footer from '../components/Footer.jsx'

const Home = () => {

    return (
        <>
            <Header/>
            <HeroSlider/>
            <div className="CardContainer">
                {
                    products.map((item, index)=> (
                        <Card key={index} item = {item}/>
                    ))
                }
            </div>
            <Footer/>
        </>
    )
}

export default Home