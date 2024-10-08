import React from 'react'
import './Home.css'
import Products from './Products'

function Home() {
    return (
        <div>
            <div>
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Banner" />
            </div>
            <div>
                <Products />
            </div>
        </div>
    )
}

export default Home
