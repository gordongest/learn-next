import { useRouter } from "next/router";

const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%"
}

const FilmPage = () =>{
    const router = useRouter();
    const  { title, director, producer, opening_crawl } = JSON.parse(router.query.film);

    return (
        <div style={styles}>
            <h1>{title}</h1>
            <h2>Directed by {director}</h2>
            <h3>Produced by {producer}</h3>
            <p>{opening_crawl}</p>
        </div>
    )
}

export default FilmPage;