
const Sections = (props) => {
    return (
   <section className={props.classes}>
       <div className="container">
           {props.children}
       </div>
   </section>
    )
}

export default Sections
