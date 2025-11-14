import { useLocation, Link } from 'react-router-dom'
import './BreadStyle.css'

const BreadCrumbs = ({ breadColor = "black" }) => {
    const location = useLocation();
    let currentLink = '';
    let routeName = location.pathname.split('/').filter(rName => rName !== '');
    let crumbs = routeName.map((crumb, index) => {
        currentLink += `/${crumb}`;
        return (
            <span className='breadCrumbs ' key={index}>
                <Link className={`text-[${breadColor}] `} to={currentLink}>{crumb}</Link>
            </span>
        );
    });

    return <nav className='relative z-[99] ' >
        <span className='breadCrumbs ' key='home' >
            <Link className={`text-[${breadColor}] `} to='/'  >Home</Link>
        </span>
        {crumbs}
    </nav>
};


export default BreadCrumbs
