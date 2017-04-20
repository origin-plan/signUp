function errorInput(ID, infoLable, info) {
	if(infoLable != null && info != null) {
		$(infoLable).text(info);
	}
	$(ID).removeClass("animated shake");
	setTimeout(function() {
		$(ID).addClass("animated shake");

	}, 1);
	setTimeout(function() {
		$(ID).removeClass("animated shake");
	}, 1000);
}