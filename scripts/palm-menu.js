$("div.menu-icon").click(function(){
    $("nav.site-nav").toggleClass('open-menu');
});
$("a.page-link").click(function(){
    $("nav.site-nav").removeClass('open-menu');
});