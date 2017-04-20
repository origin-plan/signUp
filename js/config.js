var ip = '127.0.0.1:80/signUpAdmin/';
localStorage.urlIP = "http://" + ip + "userLogin.php";

function getUrlIp() {
	return localStorage.urlIP;
}