import Link from "next/link"


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row multiple">
                  <div className=" col-sm-6 col-xs-12 col-4">
                      <div className="contact-tab flex">
                          <div><i className="i-map-pin flex aic cc" /></div>
                            <div className="flexGrow-1">
                                <h2>Address</h2>
                                <p>SA 12/6-B-4, Arihant Nagar Colony, Singhpur, Sarnath, Varanasi, UP 221007</p>
                            </div>
                      </div>
                  </div>    
                  <div className="col-4 col-sm-6 col-xs-12">
                  <div className="contact-tab flex">
                          <div><i className="i-envelope flex aic cc" /></div>
                            <div className="flexGrow-1">
                                <h2>Email Us</h2>
                                <p>info@explosionweb.co.in</p>
                                <p>contact@explosionweb.co.in</p>
                            </div>
                      </div>
                  </div>
                  <div className="col-4 col-sm-12 col-xs-12">
                  <div className="contact-tab flex">
                          <div><i className="i-call flex aic cc" /></div>
                            <div className="flexGrow-1">
                                <h2>Call Us</h2>
                                <p className="bibNumber">8574760729</p>
                            </div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="mb-bottom">
            <div className="linkActions">
                <a href="tel:8574760729">
                    <span className="i-call cl-grey"></span>
                    <span className="cl-grey">Call Now</span>
                </a>
            </div>
            <div className="linkActions">
                <Link href={'https://wa.link/n2xcqc'}>
                <a target="_blank">
                    <span className="i-whatsapp cl-green"></span>
                    <span className="cl-green">Whatsapp</span>
                </a>
                </Link>
            </div>
            </div>
           
        </footer>
    )
}
export default Footer
