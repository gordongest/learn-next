import Navbar from "../components/Navbar";
import '../styles/globals.css'

const styles = {
    footer: {
      position: "fixed",
      bottom: "0px",
      width: "100%"
    },
    content: {
        textAlign: "center"
    }
}

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <h1 className="footer content" style={styles}>it a footer</h1>
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
