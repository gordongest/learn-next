import styles from '../styles/Home.module.css'

const AboutPage = ({ person }) => {
    return (
        <>
            <h2 className={styles.card}>hi i'm {person}</h2>
        </>
    )
}

AboutPage.getInitialProps = async () => {
    console.log("getInitialProps");

    const res = await fetch('https://swapi.dev/api/people/1/');
    const json = await res.json();

    return { person: json.name };
}

export default AboutPage;

