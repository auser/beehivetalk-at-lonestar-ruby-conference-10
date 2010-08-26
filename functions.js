function black_slide(ele_name) {
  $(ele_name).bind("showoff:show", function (event) {
		$("body").css({background: "#000"});
		$(".slide").css({border: 0, color: "#FFF", background: "#000"});
	});
	var cleanup_fun = function (event) {
		$("body").css({background: "#FFF"});
    $(".slide").css({border: 1, color: "#000", background: "#FFF"});
	};
	$(ele_name).bind("showoff:next", cleanup_fun);
	$(ele_name).bind("showoff:prev", cleanup_fun);
}