/**
 * @file setStackingContext
 * @author Sara Arellano
 */


const cards = document.querySelectorAll('.sc .collapse__wrapper .card'),
	boxes = document.querySelectorAll('.sc .square'),
	clear = document.querySelector('#clear');

cards.forEach((card, index) => {
	const targetBox = document.querySelector(`#sq${index + 1}`),
		targetBoxPosition = targetBox.querySelector(`#position${index + 1}`),
		targetBoxZindex = targetBox.querySelector(`#z-index${index + 1}`),
		inputsPosition = card.querySelectorAll('.sc__option--position input[type="radio"]'),
		inputsZindex = card.querySelectorAll('.sc__option--z-index input[type="radio"]'),
		inputsCheckbox = card.querySelectorAll('.sc__option--coord input[type="checkbox"]'),
		inputsNumbers = card.querySelectorAll('.sc__option--coord input[type="number"]');

	// Position
	inputsPosition.forEach((inputPos) => {
		inputPos.addEventListener('click', (event => {

			const t = event.target,
				positionValue = t.getAttribute('value');

			targetBox.style.position = positionValue;
			targetBoxPosition.innerHTML = 'Position: ' + positionValue;

		}))
	})

	// Z-index
	inputsZindex.forEach((inputZind) => {
		inputZind.addEventListener('click', (event => {

			const t = event.target,
				zIndValue = t.getAttribute('value');

			targetBox.style.zIndex = zIndValue;
			targetBoxZindex.innerHTML = 'Z-index: ' + zIndValue;

		}))
	})

	// Coordinates
	inputsCheckbox.forEach((inputCheck) => {

		inputCheck.addEventListener('click', event => {

			const t = event.target,
			  targetID = t.id,
				inputNumber = inputCheck.nextElementSibling.nextElementSibling;

			if (inputCheck.hasAttribute('checked')) {

				inputCheck.removeAttribute('checked');
				inputNumber.setAttribute('disabled', 'disabled');
				inputNumber.value = '';
				targetBox.style[targetID] = 'auto';
				targetBox.querySelector(`#${targetID}`).innerHTML = '';

			} else {

				inputCheck.setAttribute('checked', 'checked');
				inputNumber.removeAttribute('disabled');


				inputNumber.addEventListener('input', e => {
					const target = e.target,
						tIDfull = target.id,
						tID = tIDfull.slice(0, -8);

					target.setAttribute('value', target.value);

					if (target.hasAttribute('value') && target.value.length > 0) {

						targetBox.querySelector(`#${tID}${index + 1}`).innerHTML = `${tID}: ${target.value}px`;
						targetBox.style[tID] = `${target.value}px`;

					} else {

						targetBox.querySelector(`#${tID}${index + 1}`).innerHTML = '';
						targetBox.style[tID] = 'auto';

					}


				})

			}

		})

	})

})


// Clean data

// clear.addEventListener('click', () => {
// 	const checkboxs = document.querySelectorAll('.sc__option--coord input[type="checkbox"]');

// 	console.log(checkboxs);

// 	checkboxs.forEach((check => {


// 		if (check.hasAttribute('checked')) {
// 			console.log(check);
// 			check.removeAttribute('checked')
// 		}
// 	}))

// })


