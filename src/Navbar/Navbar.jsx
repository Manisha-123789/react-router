import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();
    const movetohomepage =()=>{
        navigate('/');
    }
    return (
        <>
            <ul>
                <li><NavLink to="/" className={({isActive})=> isActive? 'nav-link': ''} >Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive})=> isActive? 'nav-link': ''}>About</NavLink></li>
                <li><NavLink to="/header" className={({isActive})=> isActive? 'nav-link': ''}>Header</NavLink></li>
                <li><NavLink to="/footer" className={({isActive})=> isActive? 'nav-link': ''}>Footer</NavLink></li>
                <li><NavLink to="/contact" className={({isActive})=> isActive? 'nav-link': ''}>Contact</NavLink></li>   
                <li><NavLink to="/jobs" className={({isActive})=> isActive? 'nav-link': ''}>Jobs</NavLink></li>   
            </ul>
            <button onClick={movetohomepage} >Get Started</button>
        </>
    )
}

export default Navbar;