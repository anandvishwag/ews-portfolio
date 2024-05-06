import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
function Header() {
    const [header, setHeader] = useState(false);
    const [toggle, settoggle] = useState(false);
    const toggler = () => {
        toggle ? settoggle(false) : settoggle(true);
    }
    const changebg = () => {
        if (window.scrollY > 40) {
            setHeader(true);
        }
        else {
            setHeader(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changebg);
    }, [])

    return (
        <>
            <header className={header ? 'header active' : 'header'}>
                <div className="container nbar  csb">
                    <div className="brand"><Link href="/"><a><img src={'/images/logo.svg'} alt="GEC logo" /></a></Link></div>
                    <div className="mBrand"><Link href="/"><a>
                  
                        <img src={'/images/mobile-logo.png'} alt="GEC logo" />
                        </a></Link>
                        </div>
                    <div className="navebar">
                        <ul className={toggle ? "nav opened" : "nav"}>
                            <li className="mb-none"><Link  href="/"><a><i className="i-call"></i><span> 8574760729</span></a></Link></li>
                            <li className="mb-none"><Link  href="/"><a><i className="i-envelope"></i> <span> info@explosionweb.co.in</span></a></Link></li>
                            <li><Link  href="/" ><a><i className="i-facebook"></i></a></Link></li>
                            <li><Link  href="/"><a><i className="i-instagram"></i></a></Link></li>
                            <li><Link  href="/"><a><i className="i-linkedin"></i></a></Link></li>
                        </ul>
                    </div>
                </div>
            </header>
           
        </>

    )
}
export default Header
