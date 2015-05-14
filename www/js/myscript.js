/* =============================================================================================================================================== */
//Default transition
function tranzicionet() { 
    $.mobile.defaultPageTransition = "none";
	rekllama();
}

function rekllama(){
	var admobid = {};
	if( /(android)/i.test(navigator.userAgent) ) { 
		admobid = { // for Android
			banner: 'ca-app-pub-9114339752225416/7304638684',
			interstitial: ''
		};
	} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
		admobid = { // for iOS
			banner: 'ca-app-pub-9114339752225416/7304638684',
			interstitial: ''
		};
	} else {
		admobid = { // for Windows Phone
			banner: '',
			interstitial: ''
		};
	}

	function initApp() {
		if (AdMob) {
			AdMob.createBanner({
				adId : admobid.banner,
				position : AdMob.AD_POSITION.BOTTOM_CENTER,
				autoShow : true
			});
		}
	}

	 if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
            document.addEventListener('deviceready', initApp, false);
        } else {
            initApp();
        }
//document.addEventListener('deviceready', initApp, false);
}