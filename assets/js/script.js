'use strict';

/**
 * @file setStackingContext
 * @author Sara Arellano
 */

var cards = document.querySelectorAll('.sc .collapse__wrapper .card'),
    boxes = document.querySelectorAll('.sc .square');

cards.forEach(function (card, index) {
	var targetBox = document.querySelector('#sq' + (index + 1)),
	    targetBoxPosition = targetBox.querySelector('#position'),
	    targetBoxZindex = targetBox.querySelector('#z-index'),
	    inputsPosition = card.querySelectorAll('.sc__option--position input[type="radio"]'),
	    inputsZindex = card.querySelectorAll('.sc__option--z-index input[type="radio"]'),
	    inputsCheckbox = card.querySelectorAll('.sc__option--coord input[type="checkbox"]'),
	    inputsNumbers = card.querySelectorAll('.sc__option--coord input[type="number"]');

	// Position
	inputsPosition.forEach(function (inputPos) {
		inputPos.addEventListener('click', function (event) {

			var t = event.target,
			    positionValue = t.getAttribute('value');

			targetBox.style.position = positionValue;
			targetBoxPosition.innerHTML = 'Position: ' + positionValue;
		});
	});

	// Z-index
	inputsZindex.forEach(function (inputZind) {
		inputZind.addEventListener('click', function (event) {

			var t = event.target,
			    zIndValue = t.getAttribute('value');

			targetBox.style.zIndex = zIndValue;
			targetBoxZindex.innerHTML = 'Z-index: ' + zIndValue;
		});
	});

	// Coordinates
	inputsCheckbox.forEach(function (inputCheck) {

		inputCheck.addEventListener('click', function (event) {

			var t = event.target,
			    targetID = t.id,
			    inputNumber = inputCheck.nextElementSibling.nextElementSibling;

			if (inputCheck.hasAttribute('checked')) {

				inputCheck.removeAttribute('checked');
				inputNumber.setAttribute('disabled', 'disabled');
				inputNumber.value = '';
				targetBox.style[targetID] = 'auto';
				targetBox.querySelector('#' + targetID).innerHTML = '';
			} else {

				inputCheck.setAttribute('checked', 'checked');
				inputNumber.removeAttribute('disabled');

				inputNumber.addEventListener('input', function (e) {
					var target = e.target,
					    tIDfull = target.id,
					    tID = tIDfull.slice(0, -7);

					target.setAttribute('value', target.value);

					if (target.hasAttribute('value') && target.value.length > 0) {

						targetBox.querySelector('#' + tID).innerHTML = tID + ': ' + target.value + 'px';
						targetBox.style[tID] = target.value + 'px';
					} else {

						targetBox.querySelector('#' + tID).innerHTML = '';
						targetBox.style[tID] = 'auto';
					}
				});
			}
		});
	});
});
