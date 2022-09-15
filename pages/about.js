import Link from "next/link";
import axios from "axios";
import { v4 as uuid } from "uuid";
import styles from '../styles/Home.module.css'

const AboutPage = ({ films }) => {
    return (
        <>
            <h2 className={styles.card}>ALLLL the movies</h2>
            <ul>
                {films.map((film) => (
                    <li key={uuid()}>
                        <Link href={`/film?id=${film.episode_id}`}>
                            {film.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

AboutPage.getInitialProps = async () => {
    axios.interceptors.response.use(response => response.data);
    const { results } = await axios.get('https://swapi.dev/api/films/');

    return { films: results };
}

export default AboutPage;

