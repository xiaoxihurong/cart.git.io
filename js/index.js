$(function () {
    /*初始化fullpage组件*/
    $('.container').fullpage({
        /*配置参数*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered: false,
        navigation: true,
        afterLoad:function (link,index) {
            $('.section').eq(index-1).addClass('now');
        },
        /*离开某一个页面的时候触发*/
        onLeave:function (index,nextIndex,direction) {
            var currentSection = $('.section').eq(index-1);
            if(index == 2 && nextIndex == 3){
                /*当前是从第2页到第3页*/
                currentSection.addClass('leaved');
            }else if(index == 3 && nextIndex == 4){
                /*当前是从第3页到第4页*/
                currentSection.addClass('leaved');
            }else if(index == 5 && nextIndex == 6){
                /*当前是从第5页到第6页*/
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if(index == 6 && nextIndex == 7){
                /*当前是从第6页到第7页*/
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    $(this).css('transition-delay',i*0.5+'s');
                });

            }
        },
        /*最好在组件初始完毕或者插件内容渲染完毕*/
        afterRender:function () {
            $('.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });

            /*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.screen04 .cart').on('transitionend',function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });


            /*第八屏功能*/
            /*1.手要跟着鼠标移动*/
            $('.screen08').on('mousemove',function (e) {
                /*鼠标的坐标设置给手*/
                $(this).find('.hand').css({
                    left:e.clientX-280 ,
                    top:e.clientY-130,
                });
            }).find('.again').on('click',function () {
                /*去除now leaved show类*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*加css属性  后果：加一个style属性*/
                /*用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.content [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
        },
        /*页面切换的时间 默认是700*/
        scrollingSpeed:1000
    });
});