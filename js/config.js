var urlIP = 'http://127.0.0.1/signUpAdmin/';

function getUrlIp() {

	return urlIP;
}

function getLoginUrl() {
	return urlIP + "userLogin.php";
}

function getSetInfoUrl() {
	return urlIP + "setInfo.php";
}

function getInfoUrl() {
	return urlIP + "getInfo.php";

}

function getSetHeadImgUlr() {
	return urlIP + "crop.php";

}

//=========================================
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