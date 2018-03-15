$("div.menu-icon").click(function(){
    $("nav.site-nav").addClass('open-menu');
});
$("html").click(function(){
	if(!$(e.target).closest('div.wrapper').length && $("nav.site-nav").hasClass('open-menu')){
		$("nav.site-nav").removeClass('open-menu');
	}
});