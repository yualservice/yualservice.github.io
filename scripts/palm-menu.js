$("div.menu-icon").click(function(){
    $("nav.site-nav").addClass('open-menu');
});
if($("nav.site-nav").hasClass('open-menu')){
	$("div.menu-icon").click(function(){
		$("nav.site-nav").removeClass('open-menu');
	});
};