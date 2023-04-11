$(document).ready(function(){
    rollingBanner();
    slider('.textureSlider',false,1,1,0);
    slider('.tickerSlider',false,4,1,480);
    slider('.athensImgSlider',false,1,1,0);
    imgSwap(".tickerSlider li img");
    imgSwap(".listContainer li img");
    panelControl(".sideContainer input");
    panelControl(".detailContainer aside div:nth-of-type(2) a");
    detailScroll(".detailContainer aside");
    guidePanelInner("#guidePanel ul li");
    autoHeight(".serviceMenu",".serviceMenu aside");
    fitvidsBox("#map");
    toggleAction(".mui");
    // toggleButton("footer div:nth-of-type(2) h3");
});
function fitvidsBox(target){
    $(target).fitVids();
}
function rollingBanner(){
    var banTarget = $(".rollingBanner li"); // li들을 banTarget에 담기. (2개) 
    var i = 0; // n번째 li를 지정하기 위해 i 를 0으로 초기화 (0번 li부터 시작)
    setInterval(function(){
        var currentBanner = banTarget.eq(i); // eq = n번째 대상구하기. eq(0) => 첫번째 li.
        banTarget.removeClass("active"); // 일단 전체 li active 삭제
        currentBanner.addClass("active"); // 현재 eq 번호에 해당하는 li에게 active 부여.
        i++; // i를 1증가
        if(i == banTarget.length){ // li의 갯수 구해와서 (현재: 2) i와 같을 때 i를 0으로 돌려놓으라.
            i = 0;
        }
    }, 2000); // 지정된시간(2000 m/s = 2초)마다 앞에 담긴 애를 실행.
}
function slider(target,pagerValue,maxVal,minVal,slideW){
    $(target).bxSlider({
        pager: pagerValue,
        maxSlides: maxVal,
        minSlides: minVal,
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
    var scrollLock = $(".detailContainer ul").height() - $(target).height(); // 우측면 aside의 높이 구하기.

    $(window).scroll(function(){ // browser에 scroll이 작동 되었을 때
        if($(this).scrollTop() >= scrollLock){ // 만약 browser의 scrollTop(스크롤막대의윗면)이 aside 높이의 절반보다 커지면
            $(target).addClass("lock"); // aside에 lock 걸기
        }else{ // 그 외 나머지 상황엔
            $(target).removeClass("lock"); // aside에 lock 풀기
        }
    });
}
// function precautions(target){

// }

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

// function toggleButton(target){
//     $(target).click(function(){
//         $(this).toggleClass("active");
//     });
// }