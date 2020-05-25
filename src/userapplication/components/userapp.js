import React, { Component } from "react";
import AuthService from "../../authentication/services/authService.js";
import Userportal from '../../userportal/userportal'
import Login from '../../login/components/login'

class Userapp extends Component {

	constructor(props){
		
		super(props);
		
		this.onLogin = this.onLogin.bind(this);
		this.onLogout = this.onLogout.bind(this);
		
		this.state = {
			isValidSession: AuthService.isValidSession()
		}
	}
	
	isValidToken(){
		return AuthService.isValidSession();
	}
	
	onLogout(){
		this.setState({
			isValidSession: AuthService.isValidSession()
		});
	}
	
	onLogin(){
		this.setState({
			isValidSession: AuthService.isValidSession()
		});
	}	
	
	render(){
		return (
			<div className='user-app-container'>
				{this.state.isValidSession ? <Userportal onLogout={this.onLogout} /> : <Login onLogin={this.onLogin} />}
			</div>
		);
	}

}

export default Userapp;