$(function() {
	//$('.m_area').nanoScroller();
    //$('.m_area').niceScroll();
});
$(document).ready(function() {
	/* MENU SHOW/HIDE */
	/*var OpenMenu = function() {
		//$('#toggle-menu').data('open', true);
		//$('#app,#menu').stop().animate({left: '+=150px'},300);
		$('.m_area').addClass('menu-open');
		setTimeout(function() {
			$('.m_area').addClass('mo-delay');
		},600);
	};
	var CloseMenu = function() {
		//$('#toggle-menu').data('open', false);
		//$('#app,#menu').stop().animate({left: '-=150px'},300);
		$('.m_area').removeClass('menu-open');
		setTimeout(function() {
			$('.m_area').removeClass('mo-delay');
		},600);
	};
	var ToggleMenu = function() {
		var MenuOpen = $('.m_area').hasClass('menu-open');
		setTimeout(function() {
			if(!MenuOpen) {
				$('.m_area').addClass('mo-delay');
			} else {
				$('.m_area').removeClass('mo-delay');
			}
		},600);
		$('.m_area').toggleClass('menu-open');
	};
	$('#toggle-menu').click(function() {
		var Open = $(this).data('open');
		if(!Open) {
			//OpenMenu();
		} else if(Open) {
			//CloseMenu();
		}
		ToggleMenu();
	});*/
	/*$("#app .swipe-area").swipe({ swipeStatus:function(event, phase, direction, distance, duration, fingers) {
			if (phase=="move" && direction =="right") {
				OpenMenu();
				return false;
			}
			if (phase=="move" && direction =="left") {
				CloseMenu();
				return false;
			}
		}
	});
	$("#app .swipe-area").click(function() {
		if($('.m_area').hasClass('menu-open')) {
			CloseMenu();
		}
	});*/
	
	/* NOTIFICATIONS SHOW/HIDE */
	var OpenNotifications = function() {
		$('.m_area').addClass('notifications-open');
		setTimeout(function() {
			$('.m_area').addClass('no-delay');
		},600);
	};
	var CloseNotifications = function() {
		$('.m_area').removeClass('notifications-open');
		setTimeout(function() {
			$('.m_area').removeClass('no-delay');
		},600);
	};
	var ToggleNotifications = function() {
		var NotificationsOpen = $('.m_area').hasClass('notifications-open');
		setTimeout(function() {
			if(!NotificationsOpen) {
				$('.m_area').addClass('no-delay');
			} else {
				$('.m_area').removeClass('no-delay');
			}
		},600);
		$('.m_area').toggleClass('notifications-open');
	};
	$('#toggle-notifications').click(function() {
		/* TEMP */ $('#toggle-notifications').removeClass('new'); /* TEMP */
		ToggleNotifications();
	});
	$("#swipe-notifications,#toggle-notifications").swipe({ swipeStatus:function(event, phase, direction, distance, duration, fingers) {
			if (phase=="move" && direction =="up") {
				/* TEMP */ $('#toggle-notifications').removeClass('new'); /* TEMP */
				OpenNotifications();
				return false;
			}
			if (phase=="move" && direction =="down") {
				CloseNotifications();
				return false;
			}
		}
	});
	$("#swipe-notifications,#toggle-notifications").click(function() {
		if($('.m_area').hasClass('notifications-open') && $('.m_area').hasClass('no-delay')) {
			CloseNotifications();
		}
	});
	/* FIM: NOTIFICATIONS SHOW/HIDE */
	
	/* CHECK CONNECTION STATUS */
	//SFM_ConnectionStatus();
	setInterval(function() { SFM_ConnectionStatus(); },2000);
	/* FIM: CHECK CONNECTION STATUS */
	
	/* REDUCES SFM_HEADER WHEN SCROLL DOWN */
	$('#app').scroll(function() {
		if($(this).scrollTop() > 300) {
			////if(!$(this).hasClass('m'))
				//var ActualST_R = $(this).scrollTop()*1 - 59;
				////$(this).addClass('m');//.scrollTop(ActualST_R);
		} else if($(this).scrollTop() < 380) {
			////if($(this).hasClass('m'))
				////$(this).removeClass('m');
		}
	});
	/* FIM: REDUCES SFM_HEADER WHEN SCROLL DOWN */
	
	/* POST ACTIONS AREA */
	/*$('article.p ._c').click(function() {
		var IsActOpen = $(this).parent('article').data('actopen');
		if(!IsActOpen) {
			$('article.p').removeClass('_cr');
			$(this).parent('article').addClass('_cr');
			$('article.p:not(._cr)').data('actopen',false).removeClass('_ao');
			$(this).parent('article').data('actopen',true).addClass('_ao');
		} else if(IsActOpen) {
			$(this).parent('article').data('actopen',false).removeClass('_ao');
		}
	});*/
	var SFM_PostLikeAction = function(em,db) {
		var ArticleElem;
		if(db) { ArticleElem = $(em).parent('article'); } else { ArticleElem = $(em).parent().parent().parent('article'); }
		var ActB_Elem = ArticleElem.children('footer').children('._pact').children('._act[data-action="like"]');
		var H_Like = ArticleElem.data('hl');
		if(!H_Like) {
			ActB_Elem.addClass('_as');
			ArticleElem.data('hl',true);
			//if(!SFM_PostLike(pid,true)) { // Dรก Like ao Post
				// REMOVE O ESTILO DE LIKE DEVIDO A ERRO
				//ActB_Elem.removeClass('_as');
				//ArticleElem.data('hl',false);
			//}
		} else if(H_Like) {
			ActB_Elem.removeClass('_as');
			ArticleElem.data('hl',false);
			//if(!SFM_PostLike(pid,false)) { // Remove o Like ao Post
				// ADICIONA O ESTILO DE LIKE DEVIDO A ERRO
				//ActB_Elem.addClass('_as');
				//ArticleElem.data('hl',true);
			//}
		}
	}
	$('article.p footer>._pact ._act').click(function() {
		var pid = $(this).parent().parent().parent('article').data('pid');
		var t = $(this).data('action');
		if(t == "like") {
			SFM_PostLikeAction(this,false);
		} else if(t == "share") {
			//SFM_PostShare(pid); // Partilha o Post
		}
	});
	$('article.p ._c').dblclick(function() {
		//SFM_PostLikeAction(this,true);
	});
	var DBL_PLIKE_IMG_TouchTime = 0;
	$('article.p ._c').click(function() {
		if(((new Date().getTime()) - DBL_PLIKE_IMG_TouchTime) < 300) {
			SFM_PostLikeAction(this,true);
		}
		DBL_PLIKE_IMG_TouchTime = new Date().getTime();
	});
	/* FIM: POST ACTIONS AREA */
	
	/* FIX IMG POST DIV HEIGHT */
	var FixPostHeight = function() { $('.content article.p ._c ._i').each(function() { $(this).height($(this).children('img').height()); }); }
	FixPostHeight();
	/* FIM: FIX IMG POST DIV HEIGHT */
});

//$('#loading').hide(); //DISABLE LOADING FROM THIS PAGE, MOVED TO SPLASH
//$(window).on('load', function() {
	setTimeout(function() {
		$('#loading').animate({opacity: 0}, 1000, function() {
			$(this).hide();
		});
	}, 1500);
//});

/* FUNCTIONS \/ */
