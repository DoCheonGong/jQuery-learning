$(document).ready(function() {
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
            moveNext(index);
        }
    })
    $(".prev").on("click", function(e) {
        e.preventDefault();
    
        if(enableClick) {
            enableClick = false;
            // var current_index = $(".panel > li").filter(".on").index();
            var current_index = $(".panel > li.on").index();
            var index;
    
            if(current_index != 0) {
                index = current_index - 1;
            } else {
                index = len - 1;
            }
            movePrev(index);
        }
    })
    $(".navi > li").on("click", function(e) {
        e.preventDefault();

        if(enableClick) {
            enableClick = false;
            var current_index = $(".panel > li").filter(".on").index();
            var index = $(this).index();
            // current_index와 index를 비교해서
            // 같으면 반응하지 않고 (return)
            // index가 크면 next로,
            // index가 작으면 prev로 이동

            // enableClick = true;
            if (index == current_index) { return; }
            if (index > current_index) {
                moveNext(index);
            }
            if (index < current_index) {
                movePrev(index);
            }
        }
    })
    function moveNext(index) {
        $(".panel > li").filter(".on").stop().animate({"left": "-100%"}, 500, function() {
            $(this).removeClass("on").hide();
        });
        $(".panel > li").eq(index).show().css({"left": "100%"})
        .animate({"left": "0%"}, 500, function() {
            $(this).addClass("on");
            enableClick = true;
        }) // eq(): 선택한 요소의 index 번호에 해당하는 요소를 찾는다
        $(".navi > li").children("a").removeClass("on");
        $(".navi > li").eq(index).children("a").addClass("on");
    }
    
    function movePrev(index) {
        $(".panel > li").filter(".on").stop().animate({"left": "100%"}, 500, function() {
            $(this).removeClass("on").hide();
        });
        $(".panel > li").eq(index).show().css({"left": "-100%"})
        .animate({"left": "0%"}, 500, function() {
            $(this).addClass("on");
            enableClick = true;
        });
        $(".navi > li").children("a").removeClass("on");
        $(".navi > li").eq(index).children("a").addClass("on");
    }
});