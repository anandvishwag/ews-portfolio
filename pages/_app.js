import '../styles/main.css'
import '../styles/custombootstap.css'
import '../styles/icon.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from '../components/layouts/MainLayout';
import { Apis } from '../config';


const layouts = {
  Main: MainLayout,

};

const MyApp = ({Component, pageProps}) =>{
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  return (
      <Layout>
       <ToastContainer />
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp;
