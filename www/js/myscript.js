/* =============================================================================================================================================== */
//Default transition
function tranzicionet() { 
    $.mobile.defaultPageTransition = "none";
	//rekllama();
	//prepareInterstitial();
}

//rekllamat 

function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);

      // Set AdMobAds options:
      admob.setOptions({
        publisherId:          "ca-app-pub-9114339752225416/7304638684",  // Required
        interstitialAdId:     "ca-app-pub-9114339752225416/3546823081",		// Optional
		bannerAtBottom:       true,
        tappxIdiOs:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        tappxShare:           0.5                                        // Optional
      });

      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();

      // Request interstitial (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitial();
    }

    document.addEventListener("deviceready", onDeviceReady, false);
/*
admob.initAdmob("ca-app-pub-9114339752225416/7304638684","ca-app-pub-9114339752225416/3546823081");
document.addEventListener(admob.Event.onInterstitialReceive, this.onInterstitialReceive, false);
admob.cacheInterstitial();
*/
function showBanner(){
	admob.showBannerAd)();
}

	
function hideBanner(){
	alert('banner is hidden');
	admob.hideBanner();
}

function showInterstitial(){
	admob.showInterstitialAd();
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
