$(document).ready(function(){
    rollingBanner();
    slider('.textureSlider',1,0);
    slider('.tickerSlider',4,480);
    slider('.athensImgSlider',1,0);
    imgSwap(".tickerSlider li img");
    imgSwap(".listContainer li img");
    panelControl(".sideContainer input");
    panelControl(".detailContainer aside div:nth-of-type(2) a");
    detailScroll(".detailContainer aside");
    guidePanelInner("#guidePanel ul li");
    autoHeight(".serviceMenu",".serviceMenu aside");
    fitvidsBox("#map");
    toggleAction(".mui");
});
function fitvidsBox(target){
    $(target).fitVids();
}
function rollingBanner(){
    var banTarget = $(".rollingBanner li"); 
    var i = 0; 
    setInterval(function(){
        var currentBanner = banTarget.eq(i); 
        banTarget.removeClass("active");
        currentBanner.addClass("active");
        i++;
        if(i == banTarget.length){ 
            i = 0;
        }
    }, 2000); 
}
function slider(target,maxVal,slideW){
    $(target).bxSlider({
        pager: false,
        maxSlides: maxVal,
        minSlides: 1,
        slideWidth: slideW,
        touchEnabled: false
    });
}
function imgSwap(target){
    var imgPath = "images/";
    var currentImg = null;
    var currentNumb = '';

    $(target).hover(function(){
        currentNumb = $(this).attr("data-imgnumb"); 
        currentImg = imgPath + currentNumb + "Hover.png";
        $(this).attr('src',currentImg);
    });
    $(target).mouseleave(function(){ 
        currentImg = imgPath + currentNumb + ".png";
        $(this).attr('src',currentImg);
    });

}
function panelControl(openBtn){
    var panelName = '';
    $(openBtn).click(function(){
        panelName = "#"+ $(this).attr("data-Panel");
        $(panelName).addClass("active");
    });
    $(".btn_close").click(function(){
        $(panelName).removeClass("active");
    });
}
function guidePanelInner(openBtn){
    $(openBtn).click(function(){
        $(openBtn).removeClass("active");
        $(this).addClass("active");
    });
}
function detailScroll(target){
    var scrollLock = $(".detailContainer ul").height() - $(target).height(); 

    $(window).scroll(function(){                    
        if($(this).scrollTop() >= scrollLock){ 
            $(target).addClass("lock"); 
        }else{ 
            $(target).removeClass("lock");  
        }
    });
}
function autoHeight(target,follow){
    if (window.matchMedia("(min-width: 1280px)").matches) {
        var targetHeight = $(target).height();
        $(follow).css("height",targetHeight);
      }
}
function toggleAction(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    })
}