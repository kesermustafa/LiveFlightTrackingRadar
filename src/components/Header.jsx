import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

    const {isLoading, error, flights} = useSelector((state) => state.flight);

    return (
        <header>
            <Link to="/" className="header-logo">
                <img src="/airplane.png" alt=""/>
                <h2 className='minilogo'>L F T</h2>
                <h2 className='logotext'>Live Flight Tracking</h2>
            </Link>

            <div className='header-info'>
                <h3>
                    {
                        isLoading ? "Flights are loading..." : error ? "Error!" : <p ><span>{flights.length} </span>
                            <span>flights found</span></p>
                    }
                </h3>
            </div>
        </header>
    );
};

export default Header;
