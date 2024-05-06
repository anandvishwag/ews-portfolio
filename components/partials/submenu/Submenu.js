import {NavLink} from "react-router-dom";

export const Services = (props) => {
    return (
<div className="megamenu">
    <div className="backdrop">
<div> 
<NavLink onClick={props.click} activeClassName="activelink" to="/life-coaching">1:1 Life Coaching</NavLink>
<NavLink onClick={props.click} activeClassName="activelink" to="/career-coaching">1:1 Career Coaching</NavLink>
<NavLink onClick={props.click} activeClassName="activelink" to="/group-coaching-for-organizations">Group Coaching For Organizations</NavLink>
</div>
</div>
</div>

    )
}


export const Vehicles = (props) => {
    return (
        <div className="megamenu">
        <div className="backdrop">
    <div>
    <NavLink onClick={props.click} to="/">Sub Menu</NavLink>
<NavLink onClick={props.click} to="/">Sub Menu2 </NavLink>
<NavLink onClick={props.click} to="/">Sub Menu3 </NavLink>
<NavLink onClick={props.click} to="/">Sub Menu4 </NavLink>
    </div>
    </div>
    </div>
    
      )
}
