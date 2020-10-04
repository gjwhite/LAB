import '../styles/globals.css'
import '../styles/styles.scss'

import { Cursor } from '../components/Cursor';

function MyApp({ Component, pageProps }) {

  return (
    <>
        <Cursor/>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
