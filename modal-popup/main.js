$(document).ready(function() {
    $("#notice > ul > li > a").on("click", function(e) {
        e.preventDefault();
        $(".popup").css("display", "block"); // using css
        // $(".popup").addClass("active"); // using addClass
        var txt = $(this).text();
        $(".popup > h1").text(txt);
    })
    
    // $("#close").on("click", function(e)
    $("#close").click(function(e) {
        e.preventDefault();
        $(".popup").css("display", "none"); // using css
        // $(".popup").removeClass("active"); // using addClass
    })
});