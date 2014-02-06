(function($) {
	$.fn.htmlmockhelper = function( options ){
		// default
		var defaults = {
			"mode" : "repeat",
			"repeat" : 10
		};

		var setting = $.extend( defaults, options );

		if( setting['mode'] == "repeat" ){
			$(this).find(".copyobj").each(function(){
				for(var i = 1; i< setting['repeat']; i++){
					$(this).clone(true).insertAfter(this);
				}
			});
		}
	}
})(jQuery);