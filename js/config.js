var ip = '127.0.0.1:80';
localStorage.urlIP = "http://" + ip + "/background/";

function getUrlIp() {
	return localStorage.urlIP;
}