import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarToggler, Nav, NavbarBrand, NavItem, Collapse } from 'reactstrap';

function Header() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <>
            <Navbar color="dark" dark expand="md" light>
                <div className="container">
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <NavbarBrand className="mr-auto" href="/">LOGO</NavbarBrand>
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={toggleNavbar}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/snacks" onClick={toggleNavbar}>Snacks</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/meals" onClick={toggleNavbar}>Meals</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/desserts" onClick={toggleNavbar}>Desserts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/loginregister" onClick={toggleNavbar}>
                                    Login/Register
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
            
            <header>
                <div className="jumbotron" style={{ backgroundImage: `url("/img/food-background.jpg")` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 offset-md-1 col-md-10">
                                <h1>Welcome to Foody. Here you'll find recipes which requires <strong>only</strong> 3 ingredients! </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;