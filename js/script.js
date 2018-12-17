$(function () {
	// Amount of scrolling before button is shown/hidden.
	  var offset = 100;
	  // Toggle view of button when scrolling.
	  $(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
		  $('#top').css('display','block');
		} else {
		  $('#top').css('display', 'none');
		}
	  });
})