// import { useRouter } from "next/router";
import axios from "axios";

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

// takes ship prop from getServerSideProps
const ShipPage = ({ ship }) =>{
    const { name, model, starship_class } = ship;

    return (
        <div style={styles.div}>
            <h1>{name}</h1>
            <h2>{model}</h2>
            <h3>{starship_class}</h3>
        </div>
    )
}

// query comes in from custom express route
export const getServerSideProps = async ({ query }) => {
    // pass query into API call and de-structure response
    const { data } = await axios.get(`https://swapi.dev/api/starships/${query.id}`);

    // return props for component
    return { props: { ship: data } };
}

export default ShipPage;