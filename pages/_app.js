import Link from "next/link";
import Navbar from "../components/Navbar";
import '../styles/globals.css'

const styles = {
    content: {
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center"
    },
    footer: {
        position: "fixed",
        bottom: "0px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
        marginBottom: "0",
        backgroundColor: "#0066CC",
    },
    h2: {
        cursor: "pointer"
    }
}

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Navbar />
            <div style={styles.content}>
                <Component {...pageProps} />
            </div>
            <Link href="/">
                <div style={styles.footer}>
                    <h2 style={styles.h2}>it a footer</h2>
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
