(function($) {
	$.fn.htmlmockhelper = function( options ){
		// default
		var defaults = {
			"mode" : "none",
			"repeat" : 10,
			"text" : 200,
			"textstr" : "this is dummy text. "
		};

		var setting = $.extend( defaults, options );
		// none
		if( setting['mode'] == "none" ){}

		// repeat
		if( setting['mode'] == "repeat" ){
			$(this).find(".copyobj").each(function(){
				for(var i = 1; i< setting['repeat']; i++){
					$(this).clone(true).insertAfter(this);
				}
			});
		}
		// dummy text
		if( setting['mode'] == "text" ){
			$(this).find(".dummy").each(function(){
				var defaultDummy = setting['textstr'];
				var defCount = defaultDummy.length;
				var repeatText = Math.floor(setting['text'] / defCount) + 2;

				var strText = new String();
				for (var i = 0; i < repeatText; i++) {
					strText += defaultDummy;
				};
				var txt = new String();
				if ( setting['text'] > defaultDummy.length ){
					txt = strText.substr( 0, setting['text'] );
				}else{
					txt = strText;
				}
				$(this).html(txt);
			});
		}
		// headline
		if( setting['mode'] == "headline"){
			var count;
			var msg;
			$("h1,h2,h3,h4,h5,h6,h7").each(function(){
				var count = $(this).text().length;
				var msg = "<div style=\"position:relative;top:-10px;right:-10px;padding:5px;background-color:rgba(0,0,0,.5);color:#fff;display:inline-block;font-size:9pt;font-weight:nomal;\">"+ count +"文字</div>";
				$(this).append( msg );
				$(this).css({'border':'1px solid #efefef;'});
			});
		}
	}
})(jQuery);