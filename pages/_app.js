import Layout from "../src/components/Layout";
import "../styles/globals.css";
import withReduxSaga from "next-redux-saga";
import wrapper from "../src/redux-saga/Store/index";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(withReduxSaga(MyApp));
