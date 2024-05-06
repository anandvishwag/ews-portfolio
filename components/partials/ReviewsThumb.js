
const ReviewsThumb = (props) => {
    return (
        <div className="col-6 col-sm-12"> 
        <div className="greviews">
      <p>{props.children}</p>
       <div className="flex wrap aic">
           <div className="usericon"> <i>
               <img  src={props.icons} alt="face"/>
                </i> </div>
          <div className="flexGrow-1">
          <h2 >{props.reviewerName}</h2>
          <span>{props.locations}</span>
          
          </div>
         
       </div>
      </div>
           </div>
    )
    
}
ReviewsThumb.defaultProps = {
    reviewstext:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
reviewerName:"JAY S",
locations:"3/09/2020",
icons:process.env.PUBLIC_URL + "/assets/img/usericon.svg",
  }
export default ReviewsThumb
