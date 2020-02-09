$(function () {
    // 点击弹出视频
    $('#view').on('click',function(){
        $('.mask').css('display','block');
    });
    $('body').on('click','#videoclose',function(){
        $('.mask').css('display','none');
    });
    // 点击按钮 收起右侧
    $('#sp').click(function(){
        var right = $('.fixed-right').css('right');
        
        if( right == '0px'){
            $('.fixed-right').addClass('active-right');
            $(this).addClass('spleft');    
        }else{
            $('.fixed-right').removeClass('active-right');
            $('#sp').removeClass('spleft');
        }
    });
    // 轮播图的实现
    $('.slide-img').css({
        position: 'absolute',
        left: 0,
        top: 0
    })
    // 设置一个全局变量
    let page = 0;
    setInterval(function () {
        page++;
        if (page == 2) {
            page = 0;
        }
        move(page);
    }, 2000)
});

function move(num) {
    var mwidth = $('.slideshow').outerWidth();//outerWidth 真实宽度(内边距和边框)
    // console.log(mwidth);
    
    $('.slide-img').animate({
        left: -num * mwidth
    },300,'linear');
    $('.slide-dot li').eq(num).addClass('active').siblings('li').removeClass('active');
}