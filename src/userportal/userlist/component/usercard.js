import React, { Component } from 'react';

class Usercard extends Component {

    constructor(props) {
        super();
	
        this.state = {};
	}
	
    render() {
	
        return (
            <div style={{ color: '#fff', background:'black'}}>
				<h2>{this.props.accountId}</h2>
				<div>{this.props.firstName +' '+ this.props.lastName}</div>
				<div>{this.props.age}</div>
			</div>
        )
    }
}

export default Usercard;