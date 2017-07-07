setInterval(function(){
	var  date = new Date();
	var set = new Date(2017,09,24,11,30,00);
	var count=set.getTime()-date.getTime();
	var hour = parseInt(count/1000/60/60%24);
	var minute=parseInt(count/1000/60%60);
	var second = parseInt(count/1000%60);
	console.log(hour+':'+minute+':'+second);
	$(".jd_clock_time :nth-child(1)").text(parseInt(hour/10));
	$(".jd_clock_time :nth-child(2)").text(parseInt(hour%10));
	$(".jd_clock_time :nth-child(4)").text(parseInt(minute/10));
	$(".jd_clock_time :nth-child(5)").text(parseInt(minute%10));
	$(".jd_clock_time :nth-child(7)").text(parseInt(second/10));
	$(".jd_clock_time :nth-child(8)").text(parseInt(second%10));
},1000)
var swiper = new Swiper('.swiper-container', {
   		loop: true,
   		pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 1500 //自动播放
    });