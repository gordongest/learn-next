import axios from "axios";

const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%"
}

const Film = ({ title, director, producer, opening_crawl }) => (
    <div style={styles}>
        <h1>{title}</h1>
        <h2>Directed by {director}</h2>
        <h3>Produced by {producer}</h3>
        <p>{opening_crawl}</p>
    </div>
)

Film.getInitialProps = async ({ query }) => {
    const { title, director, producer, opening_crawl } = await axios
        .get(`https://swapi.dev/api/films/${query.id}`);

    return { ...query, title, director, producer, opening_crawl };
}

export default Film;