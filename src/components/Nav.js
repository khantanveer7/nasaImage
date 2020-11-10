import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="nav">
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png" alt='NasaLogo' />
            <div className="nav__credit">
                <p>The Images are Pulled from </p>
                <a target="_blank" rel="noreferrer" href="https://images.nasa.gov">{`Nasa`}</a>
            </div>
            <div className="nav--end">

            </div>
            {/* image */}
            {/* Credit */}
            {/* div */}
        </nav>
    )
}

export default Nav
