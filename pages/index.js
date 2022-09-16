import Link from "next/link";
import styles from '../styles/Home.module.css';

const buttonStyles = {
    border: "none",
    borderRadius: "5px",
    color: "white",
    background: "grey",
    height: "3vh",
    width: "5vw",
    fontSize: "1.5rem",
    margin: "0 auto"
}

const IndexPage = () => {
    return (
        <div /*className={styles.grid}*/>
            <Link href="contact">
                <h1 className={styles.card}><a>this is a NextJS page, homey</a></h1>
            </Link>
        </div>
    )
}

export default IndexPage;