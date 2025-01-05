import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navLeft'>
                <a href="#" className="navItem">
                    <img src="/nav-bg.png" alt="Invictus DTU 2025" />
                    <span>Home</span>
                </a>

                <a href="#" className="navItem">
                    <img src="/nav-bg.png" alt="Invictus DTU 2025" />
                    <span>Events</span>
                </a>
            </div>

            <div className="navLogo">
                <img src="/logo.png" alt="Invictus DTU 2025" />
            </div>

            <div className='navRight'>
                <a href="#" className="navItem">
                    <img src="/nav-bg.png" alt="Invictus DTU 2025" />
                    <span>Our Team</span>
                </a>


                <a href="#" className="navItem">
                    <img src="/nav-bg.png" alt="Invictus DTU 2025" />
                    <span>Sign Up</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar