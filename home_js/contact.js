

document.querySelectorAll('.card > div').forEach(function(cardItem) {
	cardItem.addEventListener('mouseenter', function() {
		cardItem.classList.remove('flash-left');
		cardItem.classList.add('flash-right');
	});
	cardItem.addEventListener('mouseleave', function() {
		cardItem.classList.remove('flash-right');
		cardItem.classList.add('flash-left');
	});
});
