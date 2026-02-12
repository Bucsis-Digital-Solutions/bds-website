import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="sticky top-0 flex bg-[#222] text-[#e7e7e7] text-m md:text-xl items-center border-b border-b-[#777] z-50">
            <Link to="/"><img className="w-36 md:w-48 p-3" src="Logo.svg" alt="BDS Logo"></img></Link>
            {/* <Link to="/about">About Us</Link> */}
        </nav>
    )
}

export default Nav;