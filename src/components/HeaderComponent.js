import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink, Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="backgroundColorLight">
                    <Link to="/home">
                        <img src="assets/logo.png" alt="Site Logo" width="60"/>
                    </Link>
                </div>
                <Navbar sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/crochet">
                                        Crochet
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/knitting">
                                        Knitting
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/embroidery">
                                        Embroidery
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/favorites">
                                        Favorites
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/suggestions">
                                        Suggestions
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;