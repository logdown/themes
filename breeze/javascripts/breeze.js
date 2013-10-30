var breeze = function(){
	
	function domFx(controller){		
		$(controller).click(function(){
			var target = $(this).attr('fn-target'),
					fn = $(this).attr('fn-callback');

			$(target)
				.stop(1,1)
				.toggle(
					'slide',
					{
						'easing':'easeInOutQuint',
						'direction':'up'
					},
					500,
					function(){
						if (fn){
							window[fn](target);
						}
					}
				);

			return false;
		});

	}
	this.setFocus = function(dom){
		$(dom).find('input:visible').eq(0).focus();
	};
	this.goTo = function(destination){
		var pos = $(destination).offset().top;
		$('html, body')
			.stop(1,1)
			.animate(
				{
					scrollTop: pos
				},300 ,'easeInOutBack');
	};
	
	domFx('.call_fn');
	
};

breeze();