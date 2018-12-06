var S_ConnectionStatus = true;
function SFM_ConnectionStatus() {
    /*if(SFM_GetUrlParameter("android") == "true") {
        CS = Android.CheckNetwork();
    } else {
        CS = navigator.onLine;
    }*/
    if(typeof Android !== "undefined") {
        CS = Android.CheckNetwork();
    } else {
        CS = navigator.onLine;
    }
	if(!CS) {
		if(S_ConnectionStatus) {
			S_ConnectionStatus = false;
			if(!$('.header').hasClass('conn-st'))
			    $('.header,.content').addClass('conn-st');

			if(!$('#connection-status').hasClass('show'))
				$('#connection-status').addClass('show');
		}
	} else {
		if(!S_ConnectionStatus) {
			S_ConnectionStatus = true;
			if($('.header').hasClass('conn-st'))
                $('.header,.content').removeClass('conn-st');

			if($('#connection-status').hasClass('show'))
				$('#connection-status').removeClass('show');
		}
	}
}