var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {

console.log("Play Video");
video.play();
});

document.querySelector("#pause").addEventListener("click", function() {

	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", function() {

	console.log("Changing CSS");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {

	console.log("Changing CSS");
	video.classList.remove("oldSchool");
	video.classList.add("video")
});

document.querySelector("#slower").addEventListener("click", function() {

	console.log("Slow Down Video");
	video.playbackRate *= .95;
});

document.querySelector("#faster").addEventListener("click", function() {

	console.log("Speed Up Video");
	video.playbackRate /= .95;
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("Change volume");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100 + "%";
});

document.querySelector("#slider").addEventListener("click", function(){
	console.log("Changing volume");
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume*100+ "%";
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted){
		console.log("unmuted");
		this.innerHTML = "unmute";
		video.muted = false;
	}
	else{
		console.log("muted");
		this.innerHTML = "Mute";
		video.muted = true;
	}
});

document.querySelector("#skip").addEventListener("click", function(){
	
	if (video.currentTime < video.duration - 15)
	{
		console.log("skip");
		video.currentTime += 15;
		video.play();
	}
	else{
		video.currentTime = 0;
		video.play();
	}
});