import React, { Component } from "react";
import AuthService from "../../authentication/services/authService.js";

class Login extends Component {

	constructor(props){
		super(props);
		
		this.loginBtnClicked = this.loginBtnClicked.bind(this);
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);

		this.state = {
		  username: "",
		  password: ""
		};
	}
	
	onChangeUsername(e) {
		this.setState({
		  username: e.target.value
		});
	}

	onChangePassword(e) {
		this.setState({
		  password: e.target.value
		});
	}

	loginBtnClicked(e){
	var that = this;
		var response = AuthService.login(this.state.username, this.state.password);
		response.then(function(data){
			if(data['error_message']){
				throw Error(data['error_message']);
			}
			alert('login successful');
			that.props.onLogin();
		}).catch(function(e){
			alert(e);
		});
	}
	
	render(){
		return (
			<div className='login-container'>
				<div className='user-name-class'>
					<label>Username</label>
					<input className='input-el' type='text' onChange={this.onChangeUsername} />
				</div>	
				<div className='pwd-class'>
					<label>Password</label>
					<input className='input-el' type='password' onChange={this.onChangePassword} />
				</div>
				<div className='login-btn-class'>
					<button className='btn' onClick={this.loginBtnClicked}>Login</button>
				</div>
			</div>
		);
	}

}

export default Login;