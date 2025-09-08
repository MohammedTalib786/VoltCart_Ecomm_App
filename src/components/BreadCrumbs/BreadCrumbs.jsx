import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './BreadStyle.css'

const BreadCrumbs = () => {
    const location = useLocation();
    let currentLink = '';
    let routeName = location.pathname.split('/').filter(rName => rName !== '');
    let crumbs = routeName.map((crumb, index) => {
        currentLink += `/${crumb}`;
        return (
            <span className='breadCrumbs' key={index}>
                <Link to={currentLink}>{crumb}</Link>
            </span>
        );
    });

    return <nav className='relative z-[999] ' >
        <span className='breadCrumbs text-amber-800 ' key='home' >
            <Link to='/'  >Home</Link>
        </span>
        {crumbs}
    </nav>
};


export default BreadCrumbs
