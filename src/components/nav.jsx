import { Link } from "react-router-dom";

function Navigation () {
    return(
        <nav className="inner__container flex items-center justify-between">

            <div className="logo__section">
                <Link to="/" className="link-style font-style text-3xl hover:text-3xl">adygreg</Link>
            </div>

            <ul className="cta__section [&>li]:inline">
                <li><Link to="/about" className="link-style text-xl">about</Link></li>
                <li><Link to="/design" className="link-style text-xl">design</Link></li>
                <li><Link to="/project" className="link-style text-xl">project</Link></li>
                <li><Link to="/contact" className="link-style text-xl">contact</Link></li>
                <li><button type="button"  to="/contact" className="button-style text-lg py-0 px-4 ml-5">EN/UK</button></li>
            </ul>

        </nav>
    );
}

export default Navigation;