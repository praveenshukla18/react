import React, { Component } from 'react';
import Rangepicker from './rangepicker';

class Filterpane extends Component {

	constructor(){
		
		super();
		
		this.nameChanged = this.nameChanged.bind(this);
		this.handleAgeFilterChange = this.handleAgeFilterChange.bind(this);
		this.filterBtnClicked = this.filterBtnClicked.bind(this);
		
		this.state = {
			name : '',
			nameLengthStart : 0,
			nameLengthEnd : 30,
			ageStart : 30,
			startInclusive: true,
			ageEnd : 70,
			endInclusive: false,
		}
		
	}
	
	nameChanged(e){
		this.setState({name: e.target.value});
	}
	
	handleAgeFilterChange(ageStart, startInclusive, ageEnd, endInclusive){
		this.setState({ageStart: ageStart});
		this.setState({startInclusive: startInclusive});
		this.setState({ageEnd: ageEnd});
		this.setState({endInclusive: endInclusive});
	}
	
	filterBtnClicked(){
		this.filters = [];
		this.getNameFilter();
		this.geAgeFilter();
		this.props.onFilter(this.filters);
	}

	getNameFilter(){
		if(this.state.name){
			this.filters.push({
				field: 'firstName',
				type: 'eq',
				value: this.state.name
			});
		}
	}
	
	geAgeFilter(){
		this.filters.push({
			field: 'age',
			type: 'range',
			start: {
				point: this.state.ageStart,
				inclusive: this.state.startInclusive
			},
			end: {
				point: this.state.ageEnd,
				inclusive: this.state.endInclusive
			}
		});
	}
	
	render(){
		
		return(
			<div className='filter-pane'>
				<div className='filter-criteria'>
					<div>Name</div>
					<input className='input-el' type='text' onChange={this.nameChanged}/>
					<Rangepicker min='0' max='100' start='30' end='70'/>
				</div>
				<div className='filter-criteria'>
					<div>Age</div>
					<Rangepicker min='0' max='100' start='30' end='70' startInclusive={true}  onChange={this.handleAgeFilterChange}/>
				</div>
				<div style={{'border-top':'solid 1px lightgray', 'margin-top':'20px', padding:'10px'}}>
					<button className='btn' style={{float:'right'}} onClick={this.filterBtnClicked}>Filter</button>
				</div>
			</div>
		);
		
	}
}

export default Filterpane;