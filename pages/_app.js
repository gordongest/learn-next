import Link from "next/link";
import Navbar from "../components/Navbar";
import '../styles/globals.css'

const styles = {
    position: "fixed",
    bottom: "0px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: "0",
    backgroundColor: "#0066CC"
}

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Link href="/">
                <div style={styles}>
                    <h2 className="footer content" style={{cursor: "pointer"}}>it a footer</h2>
                </div>
            </Link>
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
