import axios from "axios";
import { v4 as uuid } from "uuid";
import styles from '../styles/Home.module.css'
import { useRouter } from "next/router";

const AboutPage = ({ films }) => {
    const router = useRouter();

    const handleClick = (e, film) => {
        e.preventDefault();
        router.push(
        {
                pathname: "/film",
                query: { film: JSON.stringify(film) }
            },
            `${film.title.replace(/ /g,'')}`,
        );
    }

    return (
        <div>
            <h2 className={styles.card}>ALLLL the movies</h2>
            <ul>
                {films.map((film) => (
                    <li key={uuid()} onClick={e => handleClick(e, film)} style={{cursor: "pointer"}}>
                        <h5>
                            {film.title}
                        </h5>
                    </li>
                ))}
            </ul>
        </div>
    )
}

AboutPage.getInitialProps = async () => {
    axios.interceptors.response.use(response => response.data);
    const { results } = await axios.get('https://swapi.dev/api/films/');

    return { films: results };
}

export default AboutPage;

