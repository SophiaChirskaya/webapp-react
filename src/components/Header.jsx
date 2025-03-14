import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home Page</Link>
        </div>
        </nav>
    )
}

export default Header