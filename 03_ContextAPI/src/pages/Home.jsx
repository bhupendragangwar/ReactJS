import {useContext, useState} from 'react'
import { useCount } from '../contextProvider/MainContext.jsx'

import Header from '../Common/Header.jsx'
import Footer from '../Common/Footer.jsx'

// import {counterContext} from '../contextProvider/MainContext.jsx'

export default function Home(){

    let obj = useCount()
    console.log(obj)

    return(
        <div>
            <Header/>
            <h3>Welcome to Home Page: {obj.count}</h3>
            <Footer />
        </div>
    )
}