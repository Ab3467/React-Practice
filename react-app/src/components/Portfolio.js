import React from 'react'
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg"
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"

export default function Portfolio() {
    return (
        <div>
            <div>
                <div>
                    <p>Portfolio</p>
                    <p>Plz Check out some of my work here </p>
                </div>
                <div>
                    <div>
                        <img src={reactWeather} alt="" />
                    <div>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
