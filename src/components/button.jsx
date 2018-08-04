import React, { Component } from 'react';

class VideoButton extends Component{
	constructor(props) {
        super(props);
     	this.state = {active:true};
     	this.toggle = this.toggle.bind(this);
    } 

	toggle(){
		const video = document.getElementById("video");
        video.paused ? video.play():video.pause();
		const currentState = this.state.active;
        this.setState({ active: !currentState });
       
    }

	render(){
		return (<div>
	    			<button id="btn1" onClick={this.toggle} 
	    			className={ this.state.active ?'mui-btn mui-btn--raised mui-btn--primary':'mui-btn mui-btn--raised mui-btn--danger' }>
	                Play/Pause
	            	</button>
		 	</div>
		);
	}
}

export default VideoButton;