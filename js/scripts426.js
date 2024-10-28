const response = 'esatinaezetmiaihibidresdepsk9',
	sound = document.getElementById('input-sound')

const chuloSound = new Audio('imagenes/sonido/correcta.mp3')

let value = ''

function playSound() {
	sound.currentTime = 0
	sound.play()
}

function valdiar() {
	console.log(value)
	if (value.length === 29) {
		return true
	} else {
		return false
	}
}

const validateWord = () =>
	value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

$(document).ready(function () {
	$('#input1').on('input', (e) => {
		if (value.length > 0) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 0) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}

		$('#input2').focus()
	})

	$('#input2').on('input', (e) => {
		if (value.length > 1) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 1) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input3').focus()
	})

	$('#input3').on('input', (e) => {
		if (value.length > 2) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 2) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input4').focus()
	})

	$('#input4').on('input', (e) => {
		if (value.length > 3) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 3) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input5').focus()
	})

	$('#input5').on('input', (e) => {
		if (value.length > 4) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 4) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input6').focus()
	})

	$('#input6').on('input', (e) => {
		if (value.length > 5) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 5) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input7').focus()
	})

	$('#input7').on('input', (e) => {
		if (value.length > 6) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 6) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input8').focus()
	})

	$('#input8').on('input', (e) => {
		if (value.length > 7) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 7) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input9').focus()
	})

	$('#input9').on('input', (e) => {
		if (value.length > 8) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 8) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input10').focus()
	})

	$('#input10').on('input', (e) => {
		if (value.length > 9) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 9) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input11').focus()
	})

	$('#input11').on('input', (e) => {
		if (value.length > 10) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 10) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input12').focus()
	})

	$('#input12').on('input', (e) => {
		if (value.length > 11) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 11) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input13').focus()
	})

	$('#input13').on('input', (e) => {
		if (value.length > 12) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 12) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input14').focus()
	})

	$('#input14').on('input', (e) => {
		if (value.length > 13) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 13) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input15').focus()
	})

	$('#input15').on('input', (e) => {
		if (value.length > 14) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 14) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input16').focus()
	})

	$('#input16').on('input', (e) => {
		if (value.length > 15) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 15) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input17').focus()
	})

	$('#input17').on('input', (e) => {
		if (value.length > 16) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 16) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input18').focus()
	})

	$('#input18').on('input', (e) => {
		if (value.length > 17) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 17) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input19').focus()
	})

	$('#input19').on('input', (e) => {
		if (value.length > 18) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 18) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input20').focus()
	})

	$('#input20').on('input', (e) => {
		if (value.length > 19) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 19) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input21').focus()
	})

	$('#input21').on('input', (e) => {
		if (value.length > 20) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 20) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input22').focus()
	})

	$('#input22').on('input', (e) => {
		if (value.length > 21) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 21) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input23').focus()
	})

	$('#input23').on('input', (e) => {
		if (value.length > 22) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 22) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input24').focus()
	})

	$('#input24').on('input', (e) => {
		if (value.length > 23) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 23) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input25').focus()
	})

	$('#input25').on('input', (e) => {
		if (value.length > 24) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 24) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input26').focus()
	})

	$('#input26').on('input', (e) => {
		if (value.length > 25) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 25) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input27').focus()
	})

	$('#input27').on('input', (e) => {
		if (value.length > 26) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 26) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input28').focus()
	})

	$('#input28').on('input', (e) => {
		if (value.length > 27) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 27) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
		$('#input29').focus()
	})

	$('#input29').on('input', (e) => {
		if (value.length > 28) {
			value = value
				.split('')
				.map((item, index) => {
					if (index === 28) {
						return e.target.value
					} else {
						return item
					}
				})
				.join('')
		} else {
			value = value + e.target.value
		}
		playSound()
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
		}
	})

	$('#open-reiniciar').on('click', function () {
		for (let i = 0; i < 8; i++) {
			$(`#input${i + 1}`).val('')
		}

		value = ''
	})

	$('#open-enviar').on('click', function () {
		if (valdiar()) {
			$('#open-enviar').css('background', 'transparent')
			if (response === validateWord()) {
				$('.chulo').show()
				const respuestas = JSON.parse(
					localStorage.getItem('respuestas')
				)
				if (!respuestas.find((item) => item === 'slider118')) {
					respuestas.push('slider118')
					localStorage.setItem(
						'respuestas',
						JSON.stringify(respuestas)
					)
				}
				chuloSound.play()
				setTimeout(() => {
					window.location.href = './index427.html'
				}, 3000)
			} else {
				localStorage.setItem('error', 2)
				window.location.href = './index425.html'
			}
		}
	})
})
