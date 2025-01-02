import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    armando_zax@hotmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>
                        Sign in
                    </NavLink>
                </li>
                
            </ul>
            <ul>
                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar