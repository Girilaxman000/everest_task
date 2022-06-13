import { withRouter } from 'next/router'

import Navigationbar from '../components/navbar/Navigationbar';
import {wrapper} from '../redux/store'


import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-react-calendars/styles/material.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <Navigationbar><Component {...pageProps} /></Navigationbar>
}

export default wrapper.withRedux(withRouter(MyApp));
