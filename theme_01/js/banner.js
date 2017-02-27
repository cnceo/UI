$(function () {
    var $index = 0;
    var $exdex = 0;
    $(".choose span").mouseover(function () {
        $index = $(this).index();
        $(".choose span").eq($index).addClass("red").siblings().
            removeClass("red");
        if ($index > $exdex) {
            next();
        } else if ($index < $exdex) {
            pre();
        }
        return $exdex = $index;
    });
    $(".next").click(function () {
        $index++;
        if ($index > 4) {
            $index = 0
        }
        $(".choose span").eq($index).addClass("red").siblings().
            removeClass("red");
        next();
        return $exdex = $index;
    });
    $(".pre").click(function () {
        $index--;
        if ($index < 0) {
            $index = 4
        };
        $(".choose span").eq($index).addClass("red").siblings().
          removeClass("red");
        pre();
        return $exdex = $index;
    });
    var atime = setInterval(function () {
        $(".next").click();
    }, 5000);
    function next() {
        $(".banner a").eq($index).stop(true, true).
            css("left", "100%").animate({ "left": "0" });
        $(".banner a").eq($exdex).stop(true, true).
            css("left", "0").animate({ "left": "-100%" });
    }
    function pre() {
        $(".banner a").eq($index).stop(true, true).
          css("left", "-100%").animate({ "left": "0" });
        $(".banner a").eq($exdex).stop(true, true).
          css("left", "0").animate({ "left": "100%" });
    }
})