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
        publisherId:          "pub-9114339752225416",  // Required
        interstitialAdId:     "ca-app-pub-9114339752225416/3546823081",		// Optional
	bannerAtBottom:       true,
	autoShowBanner:	 	true,
	autoShowInterstitial: false,
        tappxIdiOs:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        tappxShare:           0.5                                        // Optional
      });

      // Start showing banners (atomatic when autoShowBanner is set to true)
      admob.createBannerView();

      // Request interstitial (will present automatically when autoShowInterstitial is set to true)
      admob.requestInterstitialAd({publisherId: "ca-app-pub-9114339752225416/7304638684", interstitialAdId: "ca-app-pub-9114339752225416/3546823081"});
      //admob.requestInterstitial();
    }

    document.addEventListener("deviceready", onDeviceReady, false);
/*
admob.initAdmob("ca-app-pub-9114339752225416/7304638684","ca-app-pub-9114339752225416/3546823081");
document.addEventListener(admob.Event.onInterstitialReceive, this.onInterstitialReceive, false);
admob.cacheInterstitial();
*/
function showBanner(){
	admob.createBannerView();
	//admob.showBannerAd();
}

	
function hideBanner(){
	admob.destroyBannerView();
	alert('banner is hidden');
}

function showInterstitial(){
	admob.showInterstitialAd();
}
