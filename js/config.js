var ip = '192.168.1.101:80/signUpAdmin/';
localStorage.urlIP = "http://" + ip + "userLogin.php";

function getUrlIp() {
	return localStorage.urlIP;
}