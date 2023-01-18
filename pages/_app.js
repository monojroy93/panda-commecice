import "../styles/globals.css";
import "../styles/home.css";
import "../styles/footer.css";
import "../styles/header.css";
import "../styles/responsive.css"
import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || Fragment;

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
