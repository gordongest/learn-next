import { useRouter } from "next/router";

const styles = {
    div: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%"
    },
    p: {
        color: "yellow",
        fontSize: "2.5rem",
        fontWeight: "bold"
    }
}

const FilmPage = () =>{
    const { query } = useRouter();
    const { title, director, producer, opening_crawl } = JSON.parse(query.film);

    return (
        <div style={styles.div}>
            <h1>{title}</h1>
            <h2>Directed by {director}</h2>
            <h3>Produced by {producer}</h3>
            <p style={styles.p}>{opening_crawl}</p>
        </div>
    )
}

export default FilmPage;