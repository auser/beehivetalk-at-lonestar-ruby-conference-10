function black_slide() {
  $(".black").bind("showoff:show", function (event) {
		$("body").css({background: "#000"});
		$(".slide").css({border: 0, color: "#FFF", background: "#000"});
	});
	var cleanup_fun = function (event) {
		$("body").css({background: "#FFF"});
    $(".slide").css({border: 1, color: "#000", background: "#FFF"});
	};
	$(".black").bind("showoff:next", cleanup_fun);
	$(".black").bind("showoff:prev", cleanup_fun);
}