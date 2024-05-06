import { Link } from "react-router-dom"



const Card = (props) => {
    return (
        <div className="col-4 col-md-4 col-sm-6 col-xs-12">
          <div className="card">
          <img src={props.graphic} alt="shubham agarwal" />
          <h2>{props.title}</h2>
         
          <div className="text-center"><Link to={props.goTo} className="link" >Click To Read</Link></div>
          </div>
        </div>
    )
}

Card.defaultProps = {

    title:"Title",
    discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    graphic:process.env.PUBLIC_URL + "/assets/img/services/coaching.jpg",
}

export default Card
