import React, { Component } from 'react';

class Rangepicker extends Component {

	constructor(rangePickerOptions){
	
		super();
		
		this.createRefs();
		
		this.rangeChangeEvent = this.rangeChangeEvent.bind(this);
		this.valueClicked = this.valueClicked.bind(this);
		
		this.state = {
			min: rangePickerOptions.min ? rangePickerOptions.min : 0,
			max: rangePickerOptions.max ? rangePickerOptions.max : 120,
			start: rangePickerOptions.start ? rangePickerOptions.start : (rangePickerOptions.min ? rangePickerOptions.min : 0),
			startInclusive: !!(rangePickerOptions.startInclusive),
			end: rangePickerOptions.end ? rangePickerOptions.end : (rangePickerOptions.max ? rangePickerOptions.max : 120),
			endInclusive: !!(rangePickerOptions.endInclusive)
		}
		
		this.state['bubble1Pos'] = Number( (this.state.start - this.state.min) * 100 / (this.state.max - this.state.min) );
		this.state['bubble2Pos'] = Number( (this.state.end - this.state.min) * 100 / (this.state.max - this.state.min) );
	}
	
	createRefs(){
		this.slider1Ref = React.createRef();
		this.slider2Ref = React.createRef();
	}
	
	rangeChangeEvent(e){
		var slide1 = parseFloat(this.slider1Ref.current.value),
            slide2 = parseFloat(this.slider2Ref.current.value);
		[this.state.start, this.state.end] = slide1 > slide2 ? [slide2, slide1] : [slide1, slide2];
		this.setState({bubble2Pos: Number( (this.state.end - this.state.min) * 100 / (this.state.max - this.state.min) )});
		this.setState({bubble1Pos: Number( (this.state.start - this.state.min) * 100 / (this.state.max - this.state.min) )});
		this.props.onChange(this.state.start, this.state.startInclusive, this.state.end, this.state.endInclusive);
	}
	
	valueClicked(e){
		var bubbleType = e.target.getAttribute('type'),
			stateObj = {};
		stateObj[bubbleType] = !this.state[bubbleType];
		this.state[bubbleType] = !this.state[bubbleType];
		this.setState(stateObj);
		this.props.onChange(this.state.start, this.state.startInclusive, this.state.end, this.state.endInclusive);
	}
	
	render(){
	
		return(
			<div className='range-picker-container'>
				<div 
					className="range-value" 
					id="range1Bubble"
					style={{left: this.state.bubble1Pos+'%'}}>
					<span className={this.state.startInclusive ? 'selectedBubble' : ''} type='startInclusive' onClick={this.valueClicked}>{this.state.start}</span>
				</div>
				<input 
					ref={this.slider1Ref} 
					type='range'
					defaultValue={this.state.start} 
					min={this.state.min} 
					max={this.state.max} 
					step='1'
					onChange={this.rangeChangeEvent}/>
				<div 
					className="range-value" 
					id="range2Bubble"
					style={{left: this.state.bubble2Pos+'%'}}>
					<span className={this.state.endInclusive ? 'selectedBubble' : ''} type='endInclusive' selected={this.state.endInclusive} onClick={this.valueClicked}>{this.state.end}</span>
				</div>
				<input 
					ref={this.slider2Ref} 
					type='range'
					defaultValue={this.state.end} 
					min={this.state.min} 
					max={this.state.max} 
					step='1' 
					onChange={this.rangeChangeEvent}  />
			</div>
		)
	}

}

export default Rangepicker;