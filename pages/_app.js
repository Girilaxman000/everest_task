import '../styles/globals.css'
import {wrapper} from '../redux/store'
import { withRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(withRouter(MyApp));
