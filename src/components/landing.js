import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import LoginForm from './login-form';
import RegistrationForm from './registration-form';
import './styles/landing.css';
import logo from '../assets/images/blue-brain.png';
import {ReactComponent as MagGlass} from '../assets/images/mag-glass.svg';
import {ReactComponent as Ribbon} from '../assets/images/ribbon.svg';
import {ReactComponent as Share} from '../assets/images/share.svg';

export class LandingPage extends React.Component {

    render() {
        if(this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }
        return (
            <div className="landing">
                <div className="landing-left">
                    <div className="align-left">
                        <ul>
                            <li>
                                <span> 
                                    <span className="icon">
                                        <MagGlass />
                                    </span>
                                    Follow Nootropics.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span className="icon">
                                        <Ribbon />
                                    </span>
                                    Save and curate stacks.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <span className="icon">
                                        <Share />
                                    </span>
                                    Share with community.
                                </span>
                            </li>
                            <li id="about-link">
                                <Link to="/about"><button>Get Started</button></Link>
                            </li>
                        </ul>
                    </div>
                    {/**<p className="italic br-white gray">username: <span>demo</span> <br/> password: <span>demodemodemo</span></p>**/}
                </div> 
                <div className="landing-right">
                    <header>
                        <img src={logo} alt="logo"/>
                        <h2>NousFood</h2>
                    </header>
                    <div className="landing-login">
                        <LoginForm />
                    </div>
                    <div className="landing-signup">
                        <h3>Join today.</h3>
                        <RegistrationForm />
                    </div>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
