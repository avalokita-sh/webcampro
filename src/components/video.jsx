import React, { Component } from 'react';

const video = () =>{
	const video = document.getElementById("video");
	const vUrl = window.URL || window.webkitURL;

	navigator.getMedia = navigator.getUserMedia ||
						 navigator.webkitGetUserMedia ||
						 navigator.mozGetUserMedia ||
						 navigator.msGetUserMedia;
	const webCam = navigator.getMedia({
		video:true,
		audio:false
		},function(stream){
			video.src = vUrl.createObjectURL(stream);	
		},function(err){
			console.log(err);
		});

	return (<div>
		 	<video>{webCam}</video>
		 	</div>
		);
}

export default video;
