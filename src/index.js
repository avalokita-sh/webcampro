import React from 'react';
import ReactDOM from 'react-dom';
import WebCamVideo from './components/video';
import VideoButton from './components/button';

class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (<div>				
				<WebCamVideo />
				<VideoButton />
			</div>);
	}
}

ReactDOM.render(<App />,document.getElementById('root'));