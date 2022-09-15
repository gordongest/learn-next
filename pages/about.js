import axios from "axios";
import { v4 as uuid } from "uuid";
import styles from '../styles/Home.module.css'

const AboutPage = ({ ships }) => {
    return (
        <>
            <h2 className={styles.card}>ALLLL the starships</h2>
            <ul>
                {ships.map(ship => (
                    <li key={uuid()}>{ship.model}</li>
                ))}
            </ul>
        </>
    )
}

AboutPage.getInitialProps = async () => {
    axios.interceptors.response.use(response => response.data);
    const { results } = await axios.get('https://swapi.dev/api/starships/');

    return { ships: results };
}

export default AboutPage;

