import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import { NavLink, Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <div className="backgroundColorLight">
                    <Link to="/home">
                        <img src="assets/logo.png" alt="Site Logo" width="60"/>
                    </Link>
                </div>
                <Navbar className="navbar-light" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar className="navbar-container">
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
                            <span className="navbar-text ml-auto">
                                <Button className="login-button" outline onClick={this.toggleModal}>
                                     Login
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader className="login-modal-header" toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody className="backgroundColorLight">
                        <Form className = "login-form" onSubmit = {this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input}/>
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button className="submit" type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;