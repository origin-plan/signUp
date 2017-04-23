var urlIP = 'http://127.0.0.1/signUpAdmin/';

function getUrlIp() {

	return urlIP;
}

function getAdminLoginUrl() {
	return urlIP + 'adminLogin.php';
}

function getAdminGetInfoUrl() {
	return urlIP + 'adminGetInfo.php';

}

function setadminID(adminID) {
	localStorage.adminID = adminID;
}

function setadminPwd(adminPwd) {
	localStorage.adminPwd = adminPwd;
}

function getadminID() {
	return localStorage.adminID;
}

function getadminPwd() {
	return localStorage.adminPwd;
}