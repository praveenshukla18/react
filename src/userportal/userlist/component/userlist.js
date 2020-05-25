import React, { Component } from 'react';
import Usercard from './usercard';

class Userlist extends Component {
	
	constructor(props) {
        super();
		this.state = {};
	}
	
    render() {
		return (
			<div className='user-container'>
				{this.props.userData.map((user, index) => ( 
					<Usercard firstName={user.firstName} lastName={user.lastName} age={user.age} accountId={user.accountId} desc={user.desc}/>
				))}
			</div>
        )
    }
	
}

export default Userlist;

