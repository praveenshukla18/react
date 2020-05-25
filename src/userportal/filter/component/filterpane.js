import React, { Component } from 'react';
import Rangepicker from './rangepicker';

class Filterpane extends Component {

	constructor(){
		
		super();
		
		this.nameChanged = this.nameChanged.bind(this);
		this.handleAgeFilterChange = this.handleAgeFilterChange.bind(this);
		this.handleNameLengthFilterChange = this.handleNameLengthFilterChange.bind(this);
		this.filterBtnClicked = this.filterBtnClicked.bind(this);
		
		this.state = {
			name : '',
			nameLengthStart : 0,
			nameLengthStartInclusive: false,
			nameLengthEnd : 100,
			nameLengthEndInclusive: true,
			ageStart : 0,
			startInclusive: false,
			ageEnd : 100,
			endInclusive: true,
		}
		
	}
	
	nameChanged(e){
		this.setState({name: e.target.value});
	}
	
	handleAgeFilterChange(ageStart, startInclusive, ageEnd, endInclusive){
		this.setState({ageStart: ageStart});
		this.setState({startInclusive: startInclusive});
		this.setState({ageEnd: ageEnd});
		this.setState({nameLengthEndInclusive: endInclusive});
	}
	
	handleNameLengthFilterChange(nameLengthStart, startInclusive, nameLengthEnd, endInclusive){
		this.setState({nameLengthStart: nameLengthStart});
		this.setState({nameLengthStartInclusive: startInclusive});
		this.setState({nameLengthEnd: nameLengthEnd});
		this.setState({endInclusive: endInclusive});
	}
	
	filterBtnClicked(){
		this.filters = [];
		this.getNameFilter();
		this.geAgeFilter();
		this.getNameLengthFilter();
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
	
	getNameLengthFilter(){
		this.filters.push({
			field: 'namesize',
			type: 'range',
			start: {
				point: this.state.nameLengthStart,
				inclusive: this.state.nameLengthStartInclusive
			},
			end: {
				point: this.state.nameLengthEnd,
				inclusive: this.state.nameLengthEndInclusive
			}
		});
	}
	
	render(){
		
		return(
			<div className='filter-pane'>
				<div className='filter-criteria'>
					<div>Name</div>
					<input className='input-el' type='text' onChange={this.nameChanged}/>
					<Rangepicker min='0' max='100' start='0' end='100' endInclusive={true} onChange={this.handleNameLengthFilterChange}/>
				</div>
				<div className='filter-criteria'>
					<div>Age</div>
					<Rangepicker min='0' max='100' start='0' end='100' endInclusive={true}  onChange={this.handleAgeFilterChange}/>
				</div>
				<div style={{'border-top':'solid 1px lightgray', 'margin-top':'20px', padding:'10px'}}>
					<button className='btn' style={{float:'right'}} onClick={this.filterBtnClicked}>Filter</button>
				</div>
			</div>
		);
		
	}
}

export default Filterpane;