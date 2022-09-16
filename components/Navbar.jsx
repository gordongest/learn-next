import Link from "next/link";

const styles = {
    display: "flex",
    background: "#0066CC",
    justifyContent: "space-between",
    padding: "1rem"
}

const Navbar = () => {
    return (
        <div style={styles}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/movies">
                <a>Movies</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </div>
    )
}

export default Navbar;
