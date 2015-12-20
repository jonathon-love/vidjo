window.onload = function() {
	// Video
	var video = document.getElementById("video");

	// Buttons
	var playButton = document.getElementById("play-pause-button");
	var muteButton = document.getElementById("mute-button");
	var videoDisplay = document.getElementById("video");
	
	// Sliders
	var seekBar = document.getElementById("seek-bar");
	
	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.src = "images/pause.svg";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.src = "images/play.svg";
		}
	});
	
	// Event listener for video display clicked
	videoDisplay.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.src = "images/pause.svg";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.src = "images/play.svg";
		}
	});
	
	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.src = "images/unmute.svg";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.src = "images/mute.svg";
		}
	});
	
	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
		
		// Update the button text to 'Pause'
		playButton.src = "images/pause.svg";
	});
}