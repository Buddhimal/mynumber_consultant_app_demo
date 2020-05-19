(function($){

	$(document).ready(function(){ 

		$(".on-off-switch").off('click').on('click', function(){
			var _this = $(this);

			if( _this.hasClass('on') ){
				_this.addClass('off').removeClass('on');
			}else if( _this.hasClass('off')){
				_this.addClass('on').removeClass('off');
			}
		});

		$("#holiday-calendar").off('click').on('click', function(){
			$("#add-holiday").show(500);
			$("#add-holiday").off('click').on('click', function(){
				$(this).hide(200);
			});
		});

	});

})(jQuery);