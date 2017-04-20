var ip = '127.0.0.1/signUpAdmin/';
localStorage.urlIP = "http://127.0.0.1/signUpAdmin/userLogin.php";

function getUrlIp() {
	return localStorage.urlIP;

}

function getSetInfoUrl() {
	return "http://127.0.0.1/signUpAdmin/setInfo.php";
}

function setUserID(userID) {
	localStorage.userID = userID;

}

function setUserPwd(userPwd) {
	localStorage.userPwd = userPwd;
}

function getUserID() {
	return localStorage.userID;

}

function getUserPwd() {
	return localStorage.userPwd;
}