import { Link } from "react-router-dom"
import TextLoop from "react-text-loop";
import {useState} from 'react'
const Banner = () => {
    const [maskstate] = useState(true)
    return (
        <div className="banner">
            <div className="quickAction">
            </div>
    <div className="container">
    <div className="bannerimage">
    <TextLoop mask={maskstate} springConfig={{ stiffness:100,  mask:false, damping:15,  }}>
<img src={process.env.PUBLIC_URL + "./assets/img/CarBanner.webp"} alt="Car" />
<img src={process.env.PUBLIC_URL + "./assets/img/CarBanner.webp"} alt="Car" />
<img src={process.env.PUBLIC_URL + "./assets/img/CarBanner.webp"} alt="Car" />
</TextLoop>
        </div>
        <div className="bannerContent">
            <div className="contet">
                <h1>SHUBHAM AGARWAL </h1>
                <h2> LIFE &nbsp; CAREER COACH</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
<Link to="/" className="link gr">Read More</Link>
<Link to="/" className="link">Explore</Link>
            </div>
        </div>
       
    </div>
        </div>
    )
}

export default Banner
