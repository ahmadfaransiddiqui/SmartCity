import dynamic from 'next/dynamic'
import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Airbnb Clone</title>
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
