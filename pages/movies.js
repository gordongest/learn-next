import { useRouter } from "next/router";
import axios from "axios";
import { v4 as uuid } from "uuid";
import styles from '../styles/Home.module.css'

const MoviesPage = ({ films }) => {
    const router = useRouter();

    const handleClick = (e, film) => {
        e.preventDefault();
        // use 'void' operator here to ensure that any effects from returned promise do not affect downstream code
        void router.push(
        {
                pathname: "/film",
                query: { film: JSON.stringify(film) }
            },
            `${film.title.replace(/ /g,'').toLowerCase()}`
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

// deprecated
// AboutPage.getInitialProps = async () => {
//     axios.interceptors.response.use(response => response.data);
//     const { results } = await axios.get('https://swapi.dev/api/films/');
//
//     return { films: results };
// }

// use this or getServerSideProps instead
// getStaticProps runs only on build, getServerSideProps runs on each page request
// use getStaticProps when data will not change during lifecycle
export const getStaticProps = async () => {
    const res = await axios.get('https://swapi.dev/api/films/');
    const { results } = res.data;

    return { props: { films: results } };
}

export default MoviesPage;

