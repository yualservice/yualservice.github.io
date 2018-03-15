$("div.menu-icon").click(function(){
    $("nav.site-nav").addClass('open-menu');
	$("html").click(function(){
		$("nav.site-nav").removeClass('open-menu');
	});
});