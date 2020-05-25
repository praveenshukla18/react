import React, { Component } from "react";
import AuthService from "../../../authentication/services/authService.js";

class Header extends Component {

	constructor(props){
		
		super(props);
		
		this.logoutClicked = this.logoutClicked.bind(this);
		
		this.state = {
			
		}
	}
	
	logoutClicked(){
		AuthService.logout();
		this.props.onLogout();
	}
	
	render(){
		return (
			<div className='header'>
				<div className='header-action'>
					<button className='btn' onClick={this.logoutClicked}>Logout</button>
				</div>
			</div>
		);
	}

}

export default Header;