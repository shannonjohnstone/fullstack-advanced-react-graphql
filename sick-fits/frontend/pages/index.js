import React from 'react'
import Link from 'next/link'

const Home = () => (
    <>
        <p>This is home!</p>
        <Link href="/sell"><a>Sell</a></Link>
    </>
)

export default Home