/* =============================================================================================================================================== */
//Default transition
function tranzicionet() { 
    $.mobile.defaultPageTransition = "none";
	//rekllama();
	//prepareInterstitial();
}

//rekllamat 
admob.initAdmob("ca-app-pub-9114339752225416/7304638684","ca-app-pub-9114339752225416/3546823081");
document.addEventListener(admob.Event.onInterstitialReceive, this.onInterstitialReceive, false);
admob.cacheInterstitial();

admob.isInterstitialReady(function(isReady){
    if(isReady){
        alert("admob Interstitial loaded");
    } else admob.cacheInterstitial();
});

function showBanner(){
	admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);
	alert('banner show');
}

function hideBanner(){
	admob.hideBanner();
	alert('banner is hidden');
}

function showInterstitial(){
	admob.isInterstitialReady(function(isReady){
    if(isReady){
        admob.showInterstitial();
		alert('full works');
    } else alert('full error');
});
}

/*function rekllama(){
	var admobid = {};
	if( /(android)/i.test(navigator.userAgent) ) { 
		admobid = { // for Android
			banner: 'ca-app-pub-9114339752225416/7304638684',
			interstitial: 'ca-app-pub-9114339752225416/3546823081'
		};
	} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
		admobid = { // for iOS
			banner: 'ca-app-pub-9114339752225416/7304638684',
			interstitial: 'ca-app-pub-9114339752225416/3546823081'
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
		
}*/
