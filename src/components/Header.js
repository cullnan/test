import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <h1>TechnoDom</h1>
            <nav>
                <Link to="/">Catalog</Link>
                <Link to="/korzina">Korzina</Link>
                <Link to="/product/24?name=rere">Contact</Link>
            </nav>
        </header>
    )
}