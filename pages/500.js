import React from 'react'
// import styles from '../styles/Errors.module.scss'
import Link from 'next/link'
const ServerError = () => {
    return (
        <div className={'errorWrapper'}>
            <div className={'errorInnerWrapper'}>
              <h1>500</h1>
              <p>Sorry! Internal server error</p>
              <Link href={'#'}><a>Back to Home</a></Link>
            </div>
           
        </div>
    )
}
ServerError.layout = 'Main'
export default ServerError