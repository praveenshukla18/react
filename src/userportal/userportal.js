import React, { Component } from 'react';
import Userlist from './userlist/component/userlist'
import Userservice from './userlist/services/userservices'
import Filterpane from './filter/component/filterpane'
import Header from './header/component/header'
import Filter from './filter/services/Filter.js'

class Userportal extends Component {
	
	componentDidMount(){
		var that = this;
		var response = Userservice.getUsers();
		response.then(function(res){
			return res.json();
		}).then(function(data){
			that.setUsers(data);
			that.setState({usersFetched: true});
		});
	}
	
	setUsers(users){
		var userlist = users.map(function(user){
			user['namesize'] = user.firstName.length + user.lastName.length;
			return user;
		});
		this.users = userlist;
		this.setState({users: userlist});
	}
	
	filterUsers(filters){
		var filteredUsers = Filter.filter(this.users, filters);
		this.setState({users: filteredUsers});
	}
	
	onLogout(){
		this.props.onLogout();
	}
	
	constructor(){
		super();
	
		this.filterUsers = this.filterUsers.bind(this);
		this.onLogout = this.onLogout.bind(this);
		
		this.state = {};
	}
	
	render(){
		return(
			<div className='user-portal'>
				<Header onLogout={this.onLogout} />
				<div className='user-portal-body'>
					<div className='filter-pane-component'>
						<Filterpane onFilter={this.filterUsers}/>
					</div>
					{this.state.usersFetched ? (<Userlist userData={this.state.users}/>) : (<div>Getting users...</div>) }
				</div>
			</div>
		);
	}
	
}

export default Userportal;