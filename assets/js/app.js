function getUserPushUps() {
	return document.getElementById('pu_raw').value;
}
function getUserSitUps() {
	return document.getElementById('su_raw').value;
}
function getUserRun() {
	return document.getElementById('tmr_raw').value;
}
function calculateScore() {
	// test form
	console.log(getUserPushUps());
	console.log(getUserSitUps());
	console.log(getUserRun());
	alert('calculateScore()');
}
