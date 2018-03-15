$("div.menu-icon").click(function(){
    $("nav.site-nav").addClass('open-menu');
});
$("div.menu-icon").click(function(){
	if($("nav.site-nav").hasClass('open-menu')){
		$("nav.site-nav").removeClass('open-menu');
	}
});