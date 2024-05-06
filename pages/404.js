import React from 'react'
// import styles from '../styles/Errors.module.scss'
import Link from 'next/link'
const PageNotFound = () => {
    return (
        <div className={'errorWrapper'}>
            <div className={'errorInnerWrapper'}>
              <h1>4<span>0</span>4</h1>
              <p>Page not found !</p>
              <Link href={'/'}><a>Back to Home</a></Link>
            </div>
           
        </div>
    )
}
PageNotFound.layout = 'Main'
export default PageNotFound