/* =============================================================================================================================================== */
//Default transition
function tranzicionet() { 
    $.mobile.defaultPageTransition = "none";
	//rekllama();
	//prepareInterstitial();
}

//rekllamat 
var admobid = {};
if( /(android)/i.test(navigator.userAgent) ){ // for android
admobid = {
	banner: ‘ca-app-pub-9114339752225416/7304638684’, // or DFP format “/6253334/dfp_example_ad”
	interstitial: ‘ca-app-pub-9114339752225416/3546823081’
};
}
else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)){ // for ios
admobid = {
	banner: ‘ca-app-pub-9114339752225416/7304638684’, // or DFP format “/6253334/dfp_example_ad”
	interstitial: ‘ca-app-pub-9114339752225416/3546823081’
};
}
}

function showBanner(){
	admob.showBanner(admob.BannerSize.BANNER, admob.Position.BOTTOM_APP);
}

function hideBanner(){
	admob.hideBanner();
}

function showInterstitial(){
	AdMob.prepareInterstitial({ adId:admobid.interstitial, autoShow:true });
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
		
}

function prepareInterstitial() {
	alert('preparation complete');
       AdMob.prepareInterstitial({adId:admobid.interstitial, autoShow:false});
}

// show the interstitial later, e.g. at end of game level
if(AdMob) AdMob.showInterstitial();
//document.addEventListener('deviceready', initApp, false);
}*/
