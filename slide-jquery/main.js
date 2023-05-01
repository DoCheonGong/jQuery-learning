$(document).ready(function() {
    // 다음 버튼 이벤트가 발생하면 보여질 panel의 순번을 구하여 슬라이딩

    /*
    JS vs jQuery

    웹디자인, 웹 퍼블리셔: jQuery 80%, JS 20%
    웹 퍼블리셔, 프론트엔드: JS 80%, jQuery 20%
    */
    var len = $(".panel > li").length;
    var enableClick = true;

    $(".next").on("click", function(e) {
        e.preventDefault();

        if(enableClick) {
            enableClick = false;
            var current_index = $(".panel > li").filter(".on").index(); // .on index filter
            var index;

            if (current_index != len - 1) {
                index = current_index + 1;
            } else {
                index = 0;
            }
        
            /*
            animate(); // jQuery 문법 - 애니메이션 효과
            .animate(값, 지속시간, (가속도, ) 이후에 적용될 코드 (callback))
            지속시간 기본값 = 400 (fast, slow도 가능, fast는 200, slow는 600)
            가속도 기본값 = swing (linear는 다른 옵션)
        
            stop() 메소드의 중요성
            애니메이션 함수를 구현할 때 이전 애니메이션이 멈추기 전까지
            애니메이션이 동작하지 않는 현상이 있다 (JavaScript의 Call stack queue)
            이 메소드는 현재 동작하고 있는 애니메이션을 즉시 중단시키고
            다음 애니메이션을 적용하도록 한다
            */
            $(".panel > li").filter(".on").stop().animate({"left": "-100%"}, 500, function() {
                $(this).removeClass("on").hide();
            });
            /*
            show()와 hide()는 애니메이션을 나타내고 사라지게 하는 메소드
            fadein()과 fadeout() 메소드와 비슷하지만 차이가 있다

            css() 메소드는 jQuery가 스타일에 접근하는 것으로
            css(요소, 값)으로 적용한다
            여러 개의 효과를 넣어야 할 때는
            css({요소1: 값1, 요소2: 값2})으로 적용한다
            */
            $(".panel > li").eq(index).show().css({"left": "100%"})
            .animate({"left": "0%"}, 500, function() {
                $(this).addClass("on");
                enableClick = true;
            });
        }
    });
    $(".prev").on("click", function(e) {
        e.preventDefault();
    
        if(enableClick) {
            enableClick = false;
            var current_index = $(".panel > li").filter(".on").index();
            var index;
    
            if(current_index != 0) {
                index = current_index - 1;
            } else {
                index = len - 1;
            }
    
            $(".panel > li").filter(".on").animate({"left": "100%"}, 500, function() {
                $(this).removeClass("on").hide();
            });
            $(".panel > li").eq(index).show().css({"left": "-100%"})
            .animate({"left": "0%"}, 500, function() {
                $(this).addClass("on");
                enableClick = true;
            });
        }
    })
});