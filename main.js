const $azul = document.querySelector("#azul");
const $verde = document.querySelector("#verde");
const $rojo = document.querySelector("#rojo");
const $amarillo = document.querySelector("#amarillo");
let arrayColores = [];
const $submit = document.querySelector("#submitColores");
let $cuadro = document.querySelectorAll(".cuadro");
const $texto = document.querySelector("#textoPrimario");

let arrayInputs = [];
let ronda = "";

function devolverColorAlAzar() {
	const numeroRandom = Math.random();
	if (numeroRandom >= 0 && numeroRandom < 0.25) {
		return $azul;
	} else if (numeroRandom >= 0.25 && numeroRandom < 0.5) {
		return $rojo;
	} else if (numeroRandom >= 0.5 && numeroRandom < 0.75) {
		return $verde;
	} else if (numeroRandom >= 0.75 && numeroRandom <= 1) {
		return $amarillo;
	}
}
$azul.style.cursor = "pointer";
$rojo.style.cursor = "pointer";
$verde.style.cursor = "pointer";
$amarillo.style.cursor = "pointer";

$submit.onclick = manejarRonda;

$azul.onclick = function() {
	arrayInputs.push($azul);
	iluminarColores($azul);
};

$rojo.onclick = function() {
	arrayInputs.push($rojo);
	iluminarColores($rojo);
};

$verde.onclick = function() {
	arrayInputs.push($verde);
	iluminarColores($verde);
};

$amarillo.onclick = function() {
	arrayInputs.push($amarillo);
	iluminarColores($amarillo);
};

function chequearColores() {
	for (let i = 0; arrayColores.length > i; i++) {
		if (arrayInputs[i] === arrayColores[i]) {
			console.log("Vas bien");
		} else if (arrayInputs[i] !== arrayColores[i]) {
			$texto.textContent =
				"Perdiste! Clickea en empezar juego para jugar otra vez";
		}
	}
}
function iluminarColores($color) {
	$color.style.opacity = 1;
	setTimeout(function() {
		$color.style.opacity = 0.5;
	}, 500);
}

function reiniciarEstado() {
	arrayColores = [];
	arrayInputs = [];
	ronda = 0;
}
function manejarRonda() {
	arrayColores.push(devolverColorAlAzar());

	arrayColores.forEach(function($color, i) {
		setTimeout(function() {
			iluminarColores($color);
		}, (i + 1) * 1000);
	});
	arrayInputs = [];

	setTimeout(() => {
		chequearColores();
	}, (arrayColores.length + 1) * 2000);
}
