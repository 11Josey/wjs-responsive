/**
 * Created by Administrator on 2017/10/7.
 */
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    /*轮播图动态生成结构*/
   $(window).on('resize',function() {
       var width = $(this).width();
       if(width>=768) {
           $('.carousel-inner .item').each(function(index,ele) {
               var imgSrc = $(this).data('largeImage');
               $(ele).html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url("+imgSrc+")"));
           });

       }else {
           $('.carousel-inner .item').each(function(index,ele) {
               var imgSrc = $(this).data('smallImage');
               $(ele).html($('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt=""></a>'));
           });
       }
   }).trigger('resize');
    /*手动播放,这里注意一个细节,添加触摸事件是给carouselInner,而调用方法则是carousel*/
    var startX,endX,disX;
    var carouselInner =  $('.carousel-inner')[0];
    carouselInner.addEventListener('touchstart',function(e) {
        startX= e.targetTouches[0].clientX;
    });
    carouselInner.addEventListener('touchend',function(e) {
        endX= e.changedTouches[0].clientX;
        disX = endX - startX;
        if(disX>0) {
            $('.carousel').carousel('prev');
        }else if(disX<0) {
            $('.carousel').carousel('next');
        }
    });
    var ul = $('.wjs-product .nav-tabs');
    var lis = ul.find('li');
    var totalWidth =0;
    lis.each(function(index,ele) {
        totalWidth+= $(ele).innerWidth();
    });
    ul.width(totalWidth);
    var myScroll = new IScroll('.nav-wrap',{
        /*设置水平滑动，不允许垂直滑动*/
        scrollX: true, scrollY: false
    });







});