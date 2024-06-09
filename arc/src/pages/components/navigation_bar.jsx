import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {

    const [isDark, setDark] = useState(false)

    useEffect(() => {
    }, []);


    const switchTheme = () => {
        document.getElementById('root').setAttribute('theme', isDark ? 'light' : 'dark');
        setDark(!isDark);
    }

    return (
        <nav className="inner-container nav-container flex justify-between items-center z-10 neo-it glass-it sticky top-4 py-2 hover:py-4 hover:bg-[--background-color] transition-[150ms]">

            <div className="">
                <Link to="" className="link-style"><p>adygreg.com</p></Link>
            </div>

            <ul className="space-x-2 flex">
                <li> <Link to="about" className="link-style"><p>about</p></Link> </li>
                <li> <Link to="project" className="link-style"><p>project</p></Link> </li>
                <li> <Link to="contact" className="link-style"><p>contact</p></Link> </li>
            </ul>

            <button onClick={switchTheme} className="">
                {isDark ? <i class="fa-regular fa-sun link-style"></i> : <i class="fa-regular fa-moon link-style"></i>}
            </button>

        </nav>
    )
}

export default NavBar;
