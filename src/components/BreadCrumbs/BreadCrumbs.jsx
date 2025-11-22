import { useLocation, Link } from 'react-router-dom';

import './BreadStyle.css';


const BreadCrumbs = ({ additionalColorClass = " text-black " }) => {
    const location = useLocation();
    let currentLink = '';
    let routeName = location.pathname.split('/').filter(rName => rName !== '');
    let crumbs = routeName.map((crumb, index) => {
        currentLink += `/${crumb}`;
        return (
            <span className='breadCrumbs ' key={index}>
                <Link className={` ${additionalColorClass} `} to={currentLink}>{crumb}</Link>
            </span>
        );
    });

    return <nav className='relative z-[99] ' >
        <span className='breadCrumbs ' key='home' >
            <Link className={` ${additionalColorClass} `} to='/'  >Home</Link>
        </span>
        {crumbs}
    </nav>
}

export default BreadCrumbs;
