	function ZopimClear(DomainNameGlobal) {
$(window).load(function(){
	function createCookie(name,value,expiresDate,domainName) {
		document.cookie = name + "=" + value + "; expires=" + expiresDate +  "; domain" + "=" + domainName + "; path=/";
	}
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
		}

	var read = readCookie('ZopimSession');
	console.log(DomainNameGlobal);
	if (read==null)	{
	createCookie('ZopimSession','',0,DomainNameGlobal);	
	$zopim.livechat.clearAll();

		}
})	
	}